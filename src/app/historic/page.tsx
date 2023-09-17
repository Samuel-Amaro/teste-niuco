import Historic from "@/components/Historic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History Searchs",
  description: "All History Searchs",
};

export default function Page() {
  return (
    <main>
      <h1>History Searchs</h1>
      <p>
        Below are all previously searched terms, ordered by date and time by
        most recent
      </p>
      <Historic />
    </main>
  );
}
