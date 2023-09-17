import { HistoricContextProvider } from "@/context/HistoricContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <HistoricContextProvider>{children}</HistoricContextProvider>{" "}
      </body>
    </html>
  );
}
