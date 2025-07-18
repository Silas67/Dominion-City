import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Darker_Grotesque } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const darker = Darker_Grotesque({
  variable: "--font-darker",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dominion City Abuja Headquaters",
  description: "A church website",
  icons: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${darker.variable}`}>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
