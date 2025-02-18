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
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#4F46E5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#4F46E5",
  appleWebApp: {
    title: "CSV to Excel",
    statusBarStyle: "default",
    capable: true,
    startupImage: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-50">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4F46E5" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
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
