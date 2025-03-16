import type { Metadata } from "next";
import localFont from "next/font/local";
import { MainHeader } from "@/components/share";
import JotaiProvider from "@/store/JotaiProvider";
import "./globals.css";

const danaFont = localFont({
  src: "../assets/fonts/dana2webGX.woff",
});

export const metadata: Metadata = {
  title: "azki",
  description: "azki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${danaFont.className} antialiased`}>
        <JotaiProvider>
          <MainHeader>{children}</MainHeader>
        </JotaiProvider>
      </body>
    </html>
  );
}
