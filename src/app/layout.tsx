import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSV to Excel Converter",
  description: "Convert your CSV files to Excel format with style",
  keywords: ["CSV", "Excel", "converter", 
    "batch", "file conversion", "Converter",
    "Batch Conversion", "Free", "csv to excel", "convert csv to excel"],
  authors: [{ name: "Sueeiii" }],
  openGraph: {
    title: "CSV to Excel Converter",
    description: "Convert your CSV files to Excel format with style",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon/favicon.ico"],
  },
  manifest: "/favicon/site.webmanifest",
  themeColor: "#4F46E5",
  appleWebApp: {
    title: "CSV to Excel",
    statusBarStyle: "default",
    startupImage: [
      "/favicon/apple-touch-icon.png",
    ],
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
