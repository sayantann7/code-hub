import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CodeHub - Share and run code",
  description: "CodeHub is an interactive code editor that allows you to share and run code snippets. It supports multiple languages and runtimes. It is built with Next.js. It is open-source and free to use. It is a great tool for learning and teaching programming. It is a great tool for learning and teaching programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
        >
          {children}

          <Footer />

          <Toaster />
        </body>
      </html>
  );
}

// https://emkc.org/api/v2/piston/runtimes
