import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BotShield",
  description: "Project for LMC 3403",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="m-0 p-0">
      <head>
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon/PenFavicon-32x32.png"/> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon/PenFavicon-16x16.png"/> */}
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-[#08363b] to-[#152b38] overscroll-none  text-[#000000]`}>
        {children}
      </body>
    </html>
  );
}
