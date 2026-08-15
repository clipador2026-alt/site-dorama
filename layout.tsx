import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seoul Bloom — Seu universo de K-Dramas",
  description: "Doramas, lançamentos, notícias, rankings e guias em uma estética coreana scrapbook.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}