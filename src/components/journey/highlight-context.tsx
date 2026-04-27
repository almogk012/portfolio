"use client";

import { createContext, useCallback, useContext, useState } from "react";

type Ctx = {
  highlight: string | null;
  setHighlight: (tag: string | null) => void;
};

const HighlightContext = createContext<Ctx>({
  highlight: null,
  setHighlight: () => {},
});

export function HighlightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [highlight, setH] = useState<string | null>(null);
  const setHighlight = useCallback((t: string | null) => setH(t), []);
  return (
    <HighlightContext.Provider value={{ highlight, setHighlight }}>
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlight() {
  return useContext(HighlightContext);
}
