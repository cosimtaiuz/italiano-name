import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Your Alter Ego Generator",
  description: "Discover your alter ego with just your name!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-GY75ZHZ7GF" />
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
