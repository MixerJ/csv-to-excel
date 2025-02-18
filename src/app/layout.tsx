import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSV to Excel Converter",
  description: "Convert your CSV files to Excel format with style",
  keywords: ["CSV", "Excel", "converter", "batch", "file conversion"],
  authors: [{ name: "Sueeiii" }],
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
    <html lang="en" className="bg-gray-50">
      <body className={`${inter.className} text-gray-900 bg-gray-50 min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
