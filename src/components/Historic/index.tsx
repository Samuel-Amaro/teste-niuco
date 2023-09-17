"use client";

import { useHistoricContext } from "@/context/HistoricContext";
import Link from "next/link";

export default function Historic() {
  const historicContext = useHistoricContext();
  return (
    historicContext.historic.length > 0 && (
      <ul>
        {historicContext.historic.map((hist) => (
          <li key={hist.id}>
            <div>
              <p>{hist.timestamp}</p>
              <Link
                href={`/?q=${hist.term}`}
                target="_self"
                rel="nex"
                title="Go to home search the term again"
                aria-label="Go to home search the term again"
              >
                {hist.term}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    )
  );
}
