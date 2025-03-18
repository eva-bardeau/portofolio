import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Design to Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#1C1C1C]" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
