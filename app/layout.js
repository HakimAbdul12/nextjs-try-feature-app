import { ApolloWrapper } from "./lib/apollo-provider";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css"
import { Inter } from "next/font/google";
import BasicExample from "./components/Navbar";
// components

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "boot shop",
};

export default function RootLayout({
  children,
}) {
  return (
      <html lang="en">
        <ApolloWrapper>
            <body className={inter.className}>
              <BasicExample/>
              {children}
            </body>
        </ApolloWrapper>
      </html>
  );
}
