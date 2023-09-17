"use client";

import { useHistoricContext } from "@/context/HistoricContext";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Historic() {
  const historicContext = useHistoricContext();
  return (
    historicContext.historic.length > 0 && (
      <ul className={styles.list}>
        {historicContext.historic.map((hist) => {
          const newDate = new Date(hist.timestamp);
          return (
            <li key={hist.id} className={styles.listItem}>
              <div className={styles.card}>
                <span className={styles.cardIcon}>🔍</span>
                <p
                  className={styles.timestamp}
                >{`${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`}</p>
                <Link
                  href={`/?q=${hist.term}`}
                  target="_self"
                  rel="nex"
                  title="Go to home search the term again"
                  aria-label="Go to home search the term again"
                  className={styles.cardLink}
                >
                  {hist.term}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
}
