import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seoul Bloom | Doramas e Cultura Coreana",
  description: "Blog sobre doramas, resenhas, guias, cultura coreana e lugares reais que aparecem nas telas.",
  metadataBase: new URL("https://site-dorama.vercel.app"),
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
