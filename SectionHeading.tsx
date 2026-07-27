import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KIM YONGJIN | Portfolio",
  description: "Business × Technology × Global Communication",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
