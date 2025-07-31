import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import LocalFont from "next/font/local";




export const metadata: Metadata = {
  title: "Aizen Ecommerce",
  description: "ecommerce website built with Next.js and Clerk",
};

const raleway = LocalFont({
  src:"./fonts/1Ptug8zYS_SKggPNyC0ITw.woff2",
  variable:"--font-raleway",
  weight:"100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
