import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AidTrust Disburse",
  description: "Compliant stablecoin disbursements at scale",
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
