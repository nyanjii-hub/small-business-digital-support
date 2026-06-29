import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小規模事業者向け デジタル活用・業務改善支援",
  description:
    "ホームページ制作、業務改善ツール、AI活用支援を小さく始められる形で支援する1ページサービス紹介サイトです。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
