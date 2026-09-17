import type { Metadata } from "next";
import { Archivo, Inter, Caveat } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Ayida A. Shifa | Community & Social Media Growth Manager",
  description:
    "Portfolio of Ayida A. Shifa, Community Growth Manager and software engineering student scaling tech communities, brands, and viral short-form content across Telegram, LinkedIn, TikTok, and Instagram.",
  keywords: [
    "Community Manager",
    "Social Media Manager",
    "Growth Hacker",
    "Tech Community",
    "Women Techmakers Ethiopia",
    "TikTok Growth",
    "Instagram Growth",
    "Addis Ababa",
  ],
  authors: [{ name: "Ayida A. Shifa" }],
  openGraph: {
    title: "Ayida A. Shifa | Community & Social Media Growth Manager",
    description:
      "Turning communities and brands from zero to engaged audiences with systems, data, and storytelling.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#f4f4f0] text-[#131310] font-sans antialiased selection:bg-[#83c42e] selection:text-[#131310]">
        {children}
      </body>
    </html>
  );
}
