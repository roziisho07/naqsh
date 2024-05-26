import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Naqsh",
  description: "Naqsh Arts official",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
        <Footer />
      </body>
    </html>
  );
}
