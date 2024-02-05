import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import React from "react";

export const metadata: Metadata = {
    title: "Todo App",
    description: "This is a todo management app"
};

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={GeistSans.className + " flex flex-col h-screen text-gray-600 "}>
        {children}
        </body>
        </html>
    );
}
