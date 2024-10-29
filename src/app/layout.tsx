"use client";

import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

const helvetica = localFont({
  src: "/fonts/Helvetica.woff",
  variable: "--font-helvetica-sans",
  weight: "100,200,300,400,500,600,700,900",
});

const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={`${helvetica.className}   antialiased`}>
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
