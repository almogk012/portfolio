"use client";

import { GraphEdge, GraphNode, NetworkGraph } from "./network-graph";

type ThemeColors = {
  background: string;
  surface: string;
  ink: string;
  muted: string;
  accent: string;
  accent2: string;
  glow: string;
};

function Frame({
  theme,
  children,
  gradient,
}: {
  theme: ThemeColors;
  children: React.ReactNode;
  gradient: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `${gradient}, linear-gradient(180deg, ${theme.surface} 0%, ${theme.background} 100%)`,
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-25" />
      {children}
      <div className="absolute inset-0 radial-vignette" />
      <div className="absolute inset-0 grain" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO — career constellation                                        */
/*  Almog at center; companies orbit; tech satellites further out.     */
/* ------------------------------------------------------------------ */
export function HeroBackground() {
  // Use a wider viewBox so labels clear the edges.
  const W = 160;
  const H = 100;
  const cx = W / 2;
  const cy = H / 2;

  const nodes: GraphNode[] = [
    // Center is the H1 itself — tiny pulsing core, no label.
    { id: "me", x: cx, y: cy, kind: "core", size: 1.6 },

    // Companies on inner orbit. 5 chapters arranged so the current one
    // (Stealth) sits at the top — kept label-less because the pill already
    // declares "Building in Stealth"; the brighter pulse does the talking.
    {
      id: "stealth",
      x: cx,
      y: cy - 42,
      kind: "shield",
      size: 2.6,
      emphasized: true,
    },
    { id: "imperva", x: cx + 60, y: cy - 18, kind: "service", size: 2.6, label: "Imperva", sublabel: "2024" },
    { id: "microsoft", x: cx + 60, y: cy + 30, kind: "service", size: 2.6, label: "Microsoft", sublabel: "2020" },
    { id: "cyberx", x: cx - 60, y: cy + 30, kind: "service", size: 2.6, label: "CyberX", sublabel: "2018" },
    { id: "netcraft", x: cx - 60, y: cy - 18, kind: "service", size: 2.6, label: "Netcraft", sublabel: "2017" },

    // Tech satellites — outer ring (outside company orbit)
    // Right cluster (Stealth / Imperva / Microsoft)
    { id: "ai", x: cx + 30, y: cy - 44, label: "AI", tags: ["AI / LLM"] },
    { id: "pg", x: cx + 80, y: cy - 36, label: "PG", tags: ["PostgreSQL"] },
    { id: "aws", x: cx + 82, y: cy - 14, label: "AWS", tags: ["AWS"] },
    { id: "react", x: cx + 82, y: cy + 8, label: "React", tags: ["React"] },
    { id: "azure", x: cx + 82, y: cy + 30, label: "Azure", tags: ["Azure"] },
    { id: "csharp", x: cx + 60, y: cy + 46, label: "C#", tags: ["C#"] },

    // Left cluster (Netcraft / CyberX)
    { id: "ng", x: cx - 80, y: cy - 36, label: "Angular", tags: ["AngularJS"] },
    { id: "java", x: cx - 82, y: cy - 14, label: "Java", tags: ["Java"] },
    { id: "py", x: cx - 82, y: cy + 8, label: "Py", tags: ["Python"] },
    { id: "linux", x: cx - 82, y: cy + 30, label: "Linux", tags: ["Linux"] },
    { id: "html", x: cx - 60, y: cy + 46, label: "HTML", tags: ["HTML/CSS"] },

    // Top center — shared "Cloud" satellite for stealth/imperva/microsoft
    { id: "cloud", x: cx - 30, y: cy - 44, label: "Cloud", tags: ["Cloud"] },
  ];

  const edges: GraphEdge[] = [
    // ME → companies. Stealth gets the brightest, emphasized line.
    { from: "me", to: "stealth", traffic: true, weight: 1.7, trafficCount: 3 },
    { from: "me", to: "imperva", traffic: true, weight: 1.4, delay: 0.4, trafficCount: 2 },
    { from: "me", to: "microsoft", traffic: true, weight: 1.4, delay: 0.8, trafficCount: 2 },
    { from: "me", to: "cyberx", traffic: true, weight: 1.4, delay: 1.2, trafficCount: 2 },
    { from: "me", to: "netcraft", traffic: true, weight: 1.4, delay: 1.6, trafficCount: 2 },

    // Stealth stack — React + Python + Postgres + AI-first (and Cloud)
    { from: "stealth", to: "ai" },
    { from: "stealth", to: "pg", curve: -2 },
    { from: "stealth", to: "react", curve: -3 },
    { from: "stealth", to: "py", curve: -18 },
    { from: "stealth", to: "cloud" },

    // Imperva stack
    { from: "imperva", to: "aws" },
    { from: "imperva", to: "react" },
    { from: "imperva", to: "java", curve: 6 },
    { from: "imperva", to: "ai", curve: -3 },

    // Microsoft stack
    { from: "microsoft", to: "azure" },
    { from: "microsoft", to: "react", curve: 2 },
    { from: "microsoft", to: "csharp" },
    { from: "microsoft", to: "java", curve: -8 },
    { from: "microsoft", to: "py", curve: -6 },

    // CyberX stack
    { from: "cyberx", to: "py" },
    { from: "cyberx", to: "linux" },

    // Netcraft stack
    { from: "netcraft", to: "ng" },
    { from: "netcraft", to: "html", curve: -6 },
  ];

  return (
    <Frame
      theme={{
        background: "#05060a",
        surface: "#0a0d18",
        ink: "#f8fafc",
        muted: "#cbd5e1",
        accent: "#a5b4fc",
        accent2: "#c084fc",
        glow: "rgba(165,180,252,0.5)",
      }}
      gradient="radial-gradient(60% 50% at 50% 50%, rgba(120,119,198,0.30) 0%, transparent 65%)"
    >
      <NetworkGraph
        className="absolute inset-0 h-full w-full"
        width={W}
        height={H}
        nodes={nodes}
        edges={edges}
        accent="#a5b4fc"
        accent2="#c084fc"
        ink="#f8fafc"
        ambient
      />
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/*  STEALTH — current chapter, AI-native product                       */
/*  An agent loop: user → agent → tools/memory/LLM, with a sealed "?"  */
/*  node hinting at the product behind the curtain.                    */
/* ------------------------------------------------------------------ */
export function StealthBackground({ theme }: { theme: ThemeColors }) {
  const W = 160;
  const H = 100;

  const nodes: GraphNode[] = [
    // Inputs — network telemetry feeding the AI agent (cyber/network domain)
    {
      id: "tap",
      x: 14,
      y: 28,
      kind: "service",
      size: 2.2,
      label: "Network",
      sublabel: "Tap",
    },
    {
      id: "events",
      x: 14,
      y: 72,
      kind: "service",
      size: 2.2,
      label: "Events",
      sublabel: "Stream",
    },

    // The Agent — AI-first core
    {
      id: "agent",
      x: 60,
      y: 50,
      kind: "core",
      size: 3.6,
      label: "Agent",
      sublabel: "AI-first",
      tags: ["AI / LLM"],
      emphasized: true,
    },

    // LLM brain (above)
    {
      id: "llm",
      x: 60,
      y: 18,
      kind: "shield",
      size: 2.8,
      label: "LLM",
      sublabel: "Reasoning",
      tags: ["AI / LLM"],
    },

    // Postgres — state of record (below)
    {
      id: "pg",
      x: 60,
      y: 82,
      kind: "shield",
      size: 2.6,
      label: "Postgres",
      sublabel: "State",
      tags: ["PostgreSQL"],
    },

    // Stack — Python services / React UI / Cloud
    {
      id: "py",
      x: 100,
      y: 28,
      kind: "service",
      size: 2.4,
      label: "Python",
      sublabel: "Services",
      tags: ["Python"],
    },
    {
      id: "react",
      x: 100,
      y: 50,
      kind: "service",
      size: 2.4,
      label: "React",
      sublabel: "UI",
      tags: ["React"],
    },
    {
      id: "cloud",
      x: 100,
      y: 72,
      kind: "service",
      size: 2.2,
      label: "Cloud",
      tags: ["Cloud"],
    },

    // The sealed product — hinted at, not revealed
    {
      id: "product",
      x: 140,
      y: 50,
      kind: "shield",
      size: 3.2,
      label: "?",
      sublabel: "Stealth",
      emphasized: true,
    },
  ];

  const edges: GraphEdge[] = [
    // Network/event telemetry → agent
    { from: "tap", to: "agent", traffic: true, weight: 1.2, trafficCount: 2 },
    { from: "events", to: "agent", traffic: true, weight: 1.2, trafficCount: 2, delay: 0.5 },

    // agent ↔ llm (the reasoning loop)
    { from: "agent", to: "llm", traffic: true, weight: 1.3, trafficCount: 2 },
    { from: "llm", to: "agent", curve: -8, traffic: true, delay: 0.6 },

    // agent ↔ postgres (state)
    { from: "agent", to: "pg", traffic: true, delay: 0.4 },
    { from: "pg", to: "agent", curve: -8, traffic: true, delay: 1.2 },

    // agent → stack
    { from: "agent", to: "py", traffic: true, delay: 0.3 },
    { from: "agent", to: "react", traffic: true, delay: 0.5 },
    { from: "agent", to: "cloud", traffic: true, delay: 0.7 },

    // stack converges on the sealed product
    { from: "py", to: "product", weight: 0.9 },
    { from: "react", to: "product", weight: 0.9 },
    { from: "cloud", to: "product", weight: 0.9 },

    // dashed "what is this?" line from agent directly to product
    {
      from: "agent",
      to: "product",
      curve: -16,
      blocked: true,
      weight: 0.8,
    },
  ];

  return (
    <Frame
      theme={theme}
      gradient={`radial-gradient(60% 60% at 40% 50%, ${theme.glow} 0%, transparent 65%), radial-gradient(50% 50% at 90% 50%, ${theme.accent2}33 0%, transparent 60%)`}
    >
      <NetworkGraph
        className="absolute inset-0 h-full w-full"
        width={W}
        height={H}
        nodes={nodes}
        edges={edges}
        accent={theme.accent}
        accent2={theme.accent2}
        ink={theme.ink}
        ambient
      />
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/*  IMPERVA — defense in depth                                         */
/* ------------------------------------------------------------------ */
export function ImpervaBackground({ theme }: { theme: ThemeColors }) {
  const W = 160;
  const H = 100;

  const nodes: GraphNode[] = [
    // SOURCE — the assets being protected (DSPM/FAM watches data stores)
    { id: "src1", x: 10, y: 22, kind: "service", size: 2, label: "RDS", tags: ["SQL"] },
    { id: "src2", x: 10, y: 50, kind: "service", size: 2, label: "S3", tags: ["AWS"] },
    { id: "src3", x: 10, y: 78, kind: "service", size: 2, label: "DB", tags: ["SQL"] },

    // DSPM scanner — the central engine in Java
    {
      id: "scan",
      x: 44,
      y: 50,
      kind: "shield",
      size: 3.4,
      label: "Scanner",
      sublabel: "DSPM / FAM",
      tags: ["Java"],
    },

    // Java API gateway
    {
      id: "api",
      x: 78,
      y: 50,
      kind: "service",
      size: 2.8,
      label: "Java API",
      tags: ["Java"],
    },

    // React dashboards — what users see
    {
      id: "dash",
      x: 110,
      y: 22,
      kind: "service",
      size: 2.8,
      label: "Dashboard",
      sublabel: "React",
      tags: ["React"],
    },
    { id: "user1", x: 140, y: 14, label: "Analyst" },
    { id: "user2", x: 140, y: 30, label: "Admin" },

    // AWS Bedrock chatbot — the AI surface
    {
      id: "bedrock",
      x: 110,
      y: 78,
      kind: "service",
      size: 3,
      label: "Bedrock",
      sublabel: "Claude",
      tags: ["AWS", "AI / LLM"],
    },
    { id: "chat", x: 140, y: 70, label: "Chat" },
    { id: "ask", x: 140, y: 86, label: "Ask" },

    // Inventory — top-of-graph annotation
    {
      id: "inv",
      x: 78,
      y: 14,
      kind: "shield",
      size: 2.2,
      label: "Inventory",
      sublabel: "Insights",
      tags: ["Java"],
    },
  ];

  const edges: GraphEdge[] = [
    // Scanner ingests from data stores
    { from: "src1", to: "scan", traffic: true },
    { from: "src2", to: "scan", traffic: true, delay: 0.3 },
    { from: "src3", to: "scan", traffic: true, delay: 0.6 },

    // Scanner → API → consumers
    { from: "scan", to: "api", traffic: true, weight: 1.4, trafficCount: 2 },
    { from: "api", to: "dash", traffic: true },
    { from: "api", to: "bedrock", traffic: true, delay: 0.5 },
    { from: "dash", to: "user1", traffic: true, delay: 0.3 },
    { from: "dash", to: "user2", traffic: true, delay: 0.7 },
    { from: "bedrock", to: "chat", traffic: true, delay: 0.4 },
    { from: "bedrock", to: "ask", traffic: true, delay: 0.9 },

    // Inventory bridge
    { from: "dash", to: "inv", curve: 6 },
    { from: "bedrock", to: "inv", curve: -6 },
    { from: "inv", to: "api", weight: 1.2, traffic: true, delay: 1.3 },
  ];

  return (
    <Frame
      theme={theme}
      gradient={`radial-gradient(70% 60% at 30% 50%, ${theme.glow} 0%, transparent 65%), radial-gradient(60% 50% at 80% 60%, ${theme.accent2}33 0%, transparent 65%)`}
    >
      <NetworkGraph
        className="absolute inset-0 h-full w-full"
        width={W}
        height={H}
        nodes={nodes}
        edges={edges}
        accent={theme.accent}
        accent2={theme.accent2}
        ink={theme.ink}
        ambient
      />
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/*  MICROSOFT — planet scale cluster                                   */
/* ------------------------------------------------------------------ */
export function MicrosoftBackground({ theme }: { theme: ThemeColors }) {
  const W = 160;
  const H = 100;

  // Pods cluster — running React/Java/C#/Python services
  const pods: GraphNode[] = [
    { id: "pod1", x: 96, y: 32, kind: "service", size: 2.2, label: "Pod", tags: ["React"] },
    { id: "pod2", x: 96, y: 46, kind: "service", size: 2.2, label: "Pod", tags: ["Java"] },
    { id: "pod3", x: 96, y: 60, kind: "service", size: 2.2, label: "Pod", tags: ["C#"] },
    { id: "pod4", x: 96, y: 74, kind: "service", size: 2.2, label: "Pod", tags: ["Python"] },
  ];

  const nodes: GraphNode[] = [
    // Clients
    { id: "c1", x: 10, y: 20, label: "Web" },
    { id: "c2", x: 10, y: 40, label: "Mobile" },
    { id: "c3", x: 10, y: 60, label: "Partner" },
    { id: "c4", x: 10, y: 80, label: "On-site" },

    // Front Door — Azure edge
    {
      id: "fd",
      x: 44,
      y: 50,
      kind: "service",
      size: 3.4,
      label: "Front Door",
      sublabel: "Azure",
      tags: ["Azure"],
    },

    // Cluster gate
    { id: "gw", x: 70, y: 50, kind: "shield", size: 2.6, label: "Ingress" },
    ...pods,

    // Data — Azure-hosted
    { id: "cosmos", x: 130, y: 32, kind: "service", size: 2.6, label: "Cosmos DB", tags: ["Azure"] },
    { id: "blob", x: 130, y: 50, kind: "service", size: 2.4, label: "Storage", tags: ["Azure"] },
    { id: "queue", x: 130, y: 68, kind: "service", size: 2.4, label: "Queue", tags: ["Azure"] },

    // The "deployed dev rep" annotation
    { id: "site", x: 148, y: 90, label: "Customer", sublabel: "On-site" },
  ];

  const edges: GraphEdge[] = [
    { from: "c1", to: "fd", traffic: true },
    { from: "c2", to: "fd", traffic: true, delay: 0.2 },
    { from: "c3", to: "fd", traffic: true, delay: 0.4 },
    { from: "c4", to: "fd", traffic: true, delay: 0.6 },

    { from: "fd", to: "gw", traffic: true, weight: 1.5, trafficCount: 2 },
    { from: "gw", to: "pod1", traffic: true, delay: 0.1 },
    { from: "gw", to: "pod2", traffic: true, delay: 0.3 },
    { from: "gw", to: "pod3", traffic: true, delay: 0.5 },
    { from: "gw", to: "pod4", traffic: true, delay: 0.7 },

    { from: "pod1", to: "cosmos", traffic: true, delay: 0.7 },
    { from: "pod2", to: "blob", traffic: true, delay: 0.2 },
    { from: "pod3", to: "queue", traffic: true, delay: 0.5 },
    { from: "pod4", to: "queue", traffic: true, delay: 0.9 },

    // mesh between pods
    { from: "pod1", to: "pod2", curve: -3 },
    { from: "pod2", to: "pod3", curve: -3 },
    { from: "pod3", to: "pod4", curve: -3 },

    // dev rep deployment line
    { from: "c4", to: "site", curve: 4 },
  ];

  return (
    <Frame
      theme={theme}
      gradient={`radial-gradient(70% 60% at 50% 30%, ${theme.glow} 0%, transparent 65%), radial-gradient(40% 50% at 90% 90%, ${theme.accent2}33 0%, transparent 60%)`}
    >
      <NetworkGraph
        className="absolute inset-0 h-full w-full"
        width={W}
        height={H}
        nodes={nodes}
        edges={edges}
        accent={theme.accent}
        accent2={theme.accent2}
        ink={theme.ink}
        ambient
      />
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/*  CYBERX — industrial control network                                */
/* ------------------------------------------------------------------ */
export function CyberXBackground({ theme }: { theme: ThemeColors }) {
  const W = 160;
  const H = 100;

  const nodes: GraphNode[] = [
    // OT layer (left) — on-prem industrial control
    { id: "plc1", x: 12, y: 20, kind: "service", size: 2, label: "PLC", tags: ["On-Prem"] },
    { id: "plc2", x: 12, y: 40, kind: "service", size: 2, label: "PLC", tags: ["On-Prem"] },
    { id: "plc3", x: 12, y: 60, kind: "service", size: 2, label: "PLC", tags: ["On-Prem"] },
    { id: "rtu", x: 12, y: 80, kind: "service", size: 2, label: "RTU", tags: ["On-Prem"] },

    // Sensors / sniffers
    { id: "snf1", x: 42, y: 22, label: "Sniffer", tags: ["Network Protocols"] },
    { id: "snf2", x: 42, y: 42, label: "Sniffer", tags: ["Network Protocols"] },
    { id: "snf3", x: 42, y: 62, label: "Sniffer", tags: ["Network Protocols"] },
    { id: "snf4", x: 42, y: 82, label: "Sniffer", tags: ["Network Protocols"] },

    // Engines — Python on Linux
    {
      id: "proto",
      x: 78,
      y: 30,
      kind: "shield",
      size: 2.6,
      label: "Protocol",
      sublabel: "Decoder",
      tags: ["Network Protocols", "Python"],
    },
    {
      id: "anom",
      x: 78,
      y: 70,
      kind: "shield",
      size: 2.8,
      label: "Anomaly",
      sublabel: "Engine",
      tags: ["Python"],
    },

    // Central platform — Linux host
    {
      id: "core",
      x: 116,
      y: 50,
      kind: "core",
      size: 3.4,
      label: "CyberX",
      sublabel: "Platform",
      tags: ["Linux"],
    },

    // SOC
    { id: "soc", x: 150, y: 30, kind: "service", size: 2.4, label: "SOC" },
    { id: "alert", x: 150, y: 70, kind: "service", size: 2.4, label: "Alert" },
  ];

  const edges: GraphEdge[] = [
    { from: "plc1", to: "snf1", traffic: true },
    { from: "plc2", to: "snf2", traffic: true, delay: 0.2 },
    { from: "plc3", to: "snf3", traffic: true, delay: 0.4 },
    { from: "rtu", to: "snf4", traffic: true, delay: 0.6 },

    { from: "snf1", to: "proto", traffic: true, delay: 0.3 },
    { from: "snf2", to: "proto", traffic: true, delay: 0.5 },
    { from: "snf3", to: "anom", traffic: true, delay: 0.4 },
    { from: "snf4", to: "anom", traffic: true, delay: 0.7 },

    { from: "proto", to: "core", traffic: true, weight: 1.3, trafficCount: 2 },
    { from: "anom", to: "core", traffic: true, weight: 1.3, trafficCount: 2 },

    { from: "core", to: "soc", traffic: true, delay: 0.2 },
    { from: "core", to: "alert", traffic: true, delay: 0.6 },

    // Cross-link between engines
    { from: "proto", to: "anom", curve: -8 },
  ];

  return (
    <Frame
      theme={theme}
      gradient={`radial-gradient(50% 60% at 30% 50%, ${theme.glow} 0%, transparent 70%), radial-gradient(50% 50% at 80% 50%, ${theme.accent2}33 0%, transparent 70%)`}
    >
      <NetworkGraph
        className="absolute inset-0 h-full w-full"
        width={W}
        height={H}
        nodes={nodes}
        edges={edges}
        accent={theme.accent}
        accent2={theme.accent2}
        ink={theme.ink}
        ambient
      />
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/*  NETCRAFT — first client work, hub + spokes                         */
/* ------------------------------------------------------------------ */
export function NetcraftBackground({ theme }: { theme: ThemeColors }) {
  const W = 160;
  const H = 100;

  const cx = 80;
  const cy = 50;
  const clients = [
    { id: "dell", label: "DELL-EMC" },
    { id: "marvell", label: "Marvell" },
    { id: "bezeq", label: "Bezeq144" },
    { id: "mprest", label: "mPrest" },
  ];
  const positions = [
    { x: cx - 56, y: cy - 30 },
    { x: cx + 56, y: cy - 30 },
    { x: cx - 56, y: cy + 30 },
    { x: cx + 56, y: cy + 30 },
  ];

  const nodes: GraphNode[] = [
    { id: "hub", x: cx, y: cy, kind: "core", size: 3.6, label: "Netcraft", sublabel: "Studio" },
    ...clients.map((c, i) => ({
      id: c.id,
      x: positions[i].x,
      y: positions[i].y,
      kind: "service" as const,
      size: 2.6,
      label: c.label,
    })),

    // tech leaves around hub
    { id: "ng", x: cx - 22, y: cy - 22, label: "Angular", tags: ["AngularJS"] },
    { id: "js", x: cx + 22, y: cy - 22, label: "JS", tags: ["JavaScript"] },
    { id: "html", x: cx - 22, y: cy + 22, label: "HTML", tags: ["HTML/CSS"] },
    { id: "css", x: cx + 22, y: cy + 22, label: "CSS", tags: ["HTML/CSS"] },
  ];

  const edges: GraphEdge[] = [
    ...clients.map((c, i) => ({
      from: "hub",
      to: c.id,
      traffic: true,
      delay: i * 0.4,
      weight: 1.2,
    })),
    { from: "hub", to: "ng" },
    { from: "hub", to: "js" },
    { from: "hub", to: "html" },
    { from: "hub", to: "css" },
  ];

  return (
    <Frame
      theme={theme}
      gradient={`radial-gradient(60% 60% at 50% 70%, ${theme.glow} 0%, transparent 70%), radial-gradient(60% 60% at 50% 0%, ${theme.accent2}40 0%, transparent 60%)`}
    >
      <NetworkGraph
        className="absolute inset-0 h-full w-full"
        width={W}
        height={H}
        nodes={nodes}
        edges={edges}
        accent={theme.accent}
        accent2={theme.accent2}
        ink={theme.ink}
        ambient
      />
    </Frame>
  );
}
