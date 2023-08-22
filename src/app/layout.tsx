"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../utils/styles/tailwind.css";
const inter = Inter({ subsets: ["latin"] });
import client from "../../apollo-client";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "../redux/store";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ApolloProvider client={client}>{children}</ApolloProvider>
        </Provider>
      </body>
    </html>
  );
}
