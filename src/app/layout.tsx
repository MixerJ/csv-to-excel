import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSV to Excel Converter",
  description: "Convert your CSV files to Excel format with style",
  keywords: ["CSV", "Excel", "converter", "batch", "file conversion"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "CSV to Excel Converter",
    description: "Convert your CSV files to Excel format with style",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
