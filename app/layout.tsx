import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head';
import Navigation from "@/components/home/Navigation";
import FileUpload from "@/components/libs/FileUpload";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSV Convert Excel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>CSV to Excel Converter Free</title>
        <meta name="description" content="Free Convert your CSV files to Excel format easily and quickly." />
        <meta name="keywords" content="CSV, Excel, Converter, Batch Conversion, Free, csv to excel, convert csv to excel" />
        <meta name="author" content="Jack Zhu" />
      </Head>
      <body className={inter.className}>
        <Navigation />
        <FileUpload />
        {/* {children} */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
