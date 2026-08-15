import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dorama",
  description: "Tudo sobre doramas, K-dramas e cultura asiática.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
