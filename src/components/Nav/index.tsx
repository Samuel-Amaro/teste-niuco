import Link from "next/link";
import styles from "./styles.module.css";

export default function Nav() {
  return (
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
  );
}
