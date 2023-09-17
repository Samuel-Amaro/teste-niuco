import Form from "@/components/Form";
import Searcher from "@/components/Searcher";
import { SearchParams } from "@/types";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const pageInd = searchParams.page ? searchParams.page : "1";
  return (
    <div className={styles.containerMain}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <Link
                href="/"
                target="_self"
                rel="next"
                title="Page Home"
                aria-label="Home"
                className={styles.link}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/historic"
                target="_self"
                rel="next"
                title="Historic"
                aria-label="Historic"
                className={styles.link}
              >
                Historic
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.containerText}>
          <h1 className={styles.title}>Github username searcher</h1>
          <p className={styles.description}>Discover data from a GitHub user</p>
        </div>
      </header>
      <main>
        <Form initialValue={searchParams.q} />
        <Searcher
          username={searchParams.q ? searchParams.q : "samuel-amaro"}
          pageIndex={
            !isNaN(parseInt(pageInd)) && parseInt(pageInd) >= 1
              ? parseInt(pageInd)
              : 1
          }
        />
      </main>
    </div>
  );
}
