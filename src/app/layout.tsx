"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "app/components/Header";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('hola mundo layout');
  return (
    <html lang="en">
      <Header/>
      <body className={inter.className}>
        
        {children}

      </body>
    </html>
  );
}
