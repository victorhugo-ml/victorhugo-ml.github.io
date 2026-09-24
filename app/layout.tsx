import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Victor Hugo — Estatística, dados e Machine Learning";
const description =
  "Portfólio de Victor Hugo, estudante da UFABC em busca de estágio em Ciência de Dados, Análise de Dados ou IA, com projetos em Python, SQL, estatística e análise exploratória.";

export const metadata: Metadata = {
  metadataBase: new URL("https://victorhugo-ml.github.io"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Victor Hugo — Estatística, dados e Machine Learning" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
