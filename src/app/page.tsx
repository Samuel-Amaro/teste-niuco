import Form from "@/components/Form";
import Searcher from "@/components/Searcher";
import { SearchParams } from "@/types";
import Link from "next/link";
import styles from "./page.module.css";
import Nav from "@/components/Nav";

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const pageInd = searchParams.page ? searchParams.page : "1";
  return (
    <div className={styles.containerMain}>
      <header className={styles.header}>
        <div className={styles.containerText}>
          <h1 className={styles.title}>Github username searcher</h1>
          <p className={styles.description}>Discover data from a GitHub user</p>
        </div>
      </header>
      <main>
        <Form initialValue={searchParams.q} />
        {/*<Searcher
          username={searchParams.q ? searchParams.q : "samuel-amaro"}
          pageIndex={
            !isNaN(parseInt(pageInd)) && parseInt(pageInd) >= 1
              ? parseInt(pageInd)
              : 1
          }
        />*/}
      </main>
    </div>
  );
}
