import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bella Italia | Just another WordPress site",
  description: "Just another WordPress site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
