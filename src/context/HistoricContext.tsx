"use client";

import { Historic, HistoricContextType } from "@/types";
import { nanoid } from "nanoid";
import React, { useCallback, useContext, useMemo, useState } from "react";

export const HistoricContext = React.createContext<null | HistoricContextType>(
  null,
);

export function HistoricContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [historic, setHistoric] = useState<Historic[]>([]);

  const addHistoric = useCallback(
    (term: string) => {
      const historicIsAdded = historic.find(
        (hist) => hist.term.toLowerCase() === term.toLowerCase(),
      );
      if (historicIsAdded === undefined) {
        setHistoric([
          ...historic,
          { id: nanoid(5), timestamp: new Date().toString(), term: term },
        ]);
      }
      if (historicIsAdded) {
        const newHistoric = historic.map((hist) => {
          if (hist.term.toLowerCase() === term.toLowerCase()) {
            return {
              ...hist,
              timestamp: new Date().toString(),
            };
          }
          return hist;
        });
        setHistoric(newHistoric);
      }
    },
    [historic],
  );

  const contextValue = useMemo(
    () => ({ historic, addHistoric }),
    [historic, addHistoric],
  );

  return (
    <HistoricContext.Provider value={contextValue}>
      {children}
    </HistoricContext.Provider>
  );
}

export function useHistoricContext() {
  const historicContext = useContext(HistoricContext);

  if (!historicContext) {
    throw new Error("Error in historic context");
  }

  return historicContext;
}
