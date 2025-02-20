import "bootstrap/dist/css/bootstrap.css";
import "./globals.css"
import { Inter } from "next/font/google";

// components

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "boot shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}