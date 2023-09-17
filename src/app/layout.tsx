import { HistoricContextProvider } from "@/context/HistoricContext";
import "../styles/normalize.css";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Github username searcher",
  description: "Github username searcher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <HistoricContextProvider>
          <Nav />
          {children}
        </HistoricContextProvider>{" "}
      </body>
    </html>
  );
}
