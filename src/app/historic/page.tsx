import Historic from "@/components/Historic";
import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "History Searchs",
  description: "All History Searchs",
};

export default function Page() {
  return (
    <div className={styles.containerMain}>
      <header className={styles.header}>
        <h1 className={styles.title}>History Searchs</h1>
        <p className={styles.description}>
          Below are all previously searched terms, ordered by date and time by
          most recent
        </p>
      </header>
      <main>
        <Historic />
      </main>
    </div>
  );
}
