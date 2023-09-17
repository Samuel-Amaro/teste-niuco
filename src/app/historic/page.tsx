import Historic from "@/components/Historic";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "History Searchs",
  description: "All History Searchs",
};

export default function Page() {
  return (
    <div>
      <header>
        <nav>
          <Link
            href="/"
            target="_self"
            rel="next"
            title="Go Back Home"
            aria-label="Go Back Home"
          >
            Home
          </Link>
        </nav>
        <h1>History Searchs</h1>
        <p>
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
