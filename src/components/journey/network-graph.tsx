"use client";

import { motion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { useHighlight } from "./highlight-context";

export type GraphNode = {
  id: string;
  x: number; // viewBox units
  y: number;
  label?: string;
  sublabel?: string;
  kind?: "core" | "service" | "leaf" | "danger" | "shield";
  size?: number; // multiplier
  tags?: readonly string[]; // tech tags for cross-graph highlight
  emphasized?: boolean;
};

export type GraphEdge = {
  from: string;
  to: string;
  curve?: number; // 0 straight, +/- bows
  traffic?: boolean; // show pulse(s) along this edge
  trafficCount?: number; // # of pulses
  blocked?: boolean; // dashed red, no traffic
  delay?: number;
  weight?: number; // stroke width multiplier
};

type Props = {
  nodes: readonly GraphNode[];
  edges: readonly GraphEdge[];
  accent: string;
  accent2?: string;
  ink: string;
  width?: number;
  height?: number;
  className?: string;
  /**
   * If "slice" the graph fills its container (cropping); if "meet" it scales
   * to fit. Default "meet" preserves the topology's intended composition.
   */
  fit?: "slice" | "meet";
  drawDelay?: number;
  /** When true, graph fades in slowly (used for backgrounds). */
  ambient?: boolean;
};

function curvedPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  k = 0
): string {
  if (!k) return `M ${x1.toFixed(3)} ${y1.toFixed(3)} L ${x2.toFixed(3)} ${y2.toFixed(3)}`;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const cx = mx + nx * k;
  const cy = my + ny * k;
  return `M ${x1.toFixed(3)} ${y1.toFixed(3)} Q ${cx.toFixed(3)} ${cy.toFixed(3)} ${x2.toFixed(3)} ${y2.toFixed(3)}`;
}

export function NetworkGraph({
  nodes,
  edges,
  accent,
  accent2,
  ink,
  width = 100,
  height = 100,
  className,
  fit = "meet",
  drawDelay = 0,
  ambient = false,
}: Props) {
  const a2 = accent2 ?? accent;
  const map = new Map(nodes.map((n) => [n.id, n] as const));
  const baseId = useId().replace(/[:]/g, "_");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { highlight } = useHighlight();

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio={
        fit === "slice" ? "xMidYMid slice" : "xMidYMid meet"
      }
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${baseId}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
          <stop offset="60%" stopColor={accent} stopOpacity="0.12" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${baseId}-edge`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={accent} stopOpacity="0.05" />
          <stop offset="50%" stopColor={a2} stopOpacity="0.55" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id={`${baseId}-edge-hot`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={a2} stopOpacity="0.3" />
          <stop offset="50%" stopColor={a2} stopOpacity="0.95" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* edges */}
      {edges.map((e, i) => {
        const a = map.get(e.from);
        const b = map.get(e.to);
        if (!a || !b) return null;
        const d = curvedPath(a.x, a.y, b.x, b.y, e.curve ?? 0);
        const hot =
          highlight &&
          (a.tags?.includes(highlight) || b.tags?.includes(highlight));
        const edgeStroke = e.blocked
          ? "#ef4444"
          : hot
          ? `url(#${baseId}-edge-hot)`
          : `url(#${baseId}-edge)`;
        const sw = (e.weight ?? 1) * (e.blocked ? 0.18 : 0.16);
        const initialOpacity = ambient ? 0 : 0;
        const targetOpacity = hot ? 1 : ambient ? 0.7 : 1;
        const trafficCount = e.trafficCount ?? 1;
        return (
          <g key={`${e.from}-${e.to}-${i}`}>
            <motion.path
              d={d}
              fill="none"
              stroke={edgeStroke}
              strokeWidth={sw}
              strokeLinecap="round"
              strokeDasharray={e.blocked ? "0.6 0.4" : undefined}
              initial={{ pathLength: 0, opacity: initialOpacity }}
              animate={{ pathLength: 1, opacity: targetOpacity }}
              transition={{
                pathLength: {
                  duration: 1.4,
                  delay: drawDelay + i * 0.06,
                  ease: [0.2, 0.8, 0.2, 1],
                },
                opacity: { duration: 0.6, delay: drawDelay + i * 0.06 },
              }}
            />
            {e.traffic &&
              !e.blocked &&
              mounted &&
              Array.from({ length: trafficCount }).map((_, p) => (
                <TrafficPulse
                  key={p}
                  d={d}
                  color={a2}
                  duration={3.4 + (i % 3) * 0.8}
                  delay={
                    drawDelay +
                    1.2 +
                    (e.delay ?? 0) +
                    p * (3.4 / Math.max(trafficCount, 1))
                  }
                />
              ))}
          </g>
        );
      })}

      {/* nodes */}
      {nodes.map((n, i) => {
        const isHot = highlight && n.tags?.includes(highlight);
        const base =
          n.size ??
          (n.kind === "core"
            ? 3.6
            : n.kind === "service"
            ? 2.4
            : n.kind === "shield"
            ? 2.6
            : n.kind === "danger"
            ? 2.2
            : 1.8);
        const fill = n.kind === "danger" ? "#ef4444" : accent;
        return (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: drawDelay + 0.5 + i * 0.04,
              duration: 0.55,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={base * 2.6}
              fill={`url(#${baseId}-glow)`}
              animate={{
                opacity: isHot
                  ? [0.7, 1, 0.7]
                  : n.emphasized
                  ? [0.45, 0.7, 0.45]
                  : [0.18, 0.32, 0.18],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={base * 1.6}
              fill="none"
              stroke={accent}
              strokeOpacity={isHot ? 0.95 : 0.4}
              strokeWidth="0.14"
            />
            {n.kind === "shield" && (
              <circle
                cx={n.x}
                cy={n.y}
                r={base * 2.2}
                fill="none"
                stroke={accent}
                strokeOpacity={isHot ? 0.7 : 0.25}
                strokeWidth="0.1"
                strokeDasharray="0.8 0.5"
              />
            )}
            <circle cx={n.x} cy={n.y} r={base * 0.55} fill={fill} />
            {n.label && (
              <g>
                <text
                  x={n.x}
                  y={n.y + base * 1.6 + 2.2}
                  textAnchor="middle"
                  fontSize={n.kind === "core" ? "1.9" : "1.4"}
                  fontFamily="var(--font-mono), ui-monospace, monospace"
                  fill={ink}
                  fillOpacity={isHot ? 1 : n.kind === "core" ? 0.9 : 0.7}
                  style={{ letterSpacing: "0.18em" }}
                >
                  {n.label.toUpperCase()}
                </text>
                {n.sublabel && (
                  <text
                    x={n.x}
                    y={n.y + base * 1.6 + 4.2}
                    textAnchor="middle"
                    fontSize="1.05"
                    fontFamily="var(--font-mono), ui-monospace, monospace"
                    fill={ink}
                    fillOpacity={0.45}
                    style={{ letterSpacing: "0.25em" }}
                  >
                    {n.sublabel.toUpperCase()}
                  </text>
                )}
              </g>
            )}
          </motion.g>
        );
      })}
    </svg>
  );
}

function TrafficPulse({
  d,
  color,
  duration,
  delay,
}: {
  d: string;
  color: string;
  duration: number;
  delay: number;
}) {
  return (
    <g>
      <circle r="0.55" fill={color}>
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={d}
          rotate="auto"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.1;0.9;1"
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
        />
      </circle>
      <circle r="1.4" fill={color} fillOpacity="0.15">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={d}
        />
        <animate
          attributeName="opacity"
          values="0;0.55;0.55;0"
          keyTimes="0;0.1;0.9;1"
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
        />
      </circle>
    </g>
  );
}
