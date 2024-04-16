import React from "react";
import { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css'

export const metadata: Metadata = {
  title: "VideoBridge | connect",
  description: "Video meeting/calling App made by connect",
  icons: "../logo.jpeg"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#000",
          colorInputBackground: "#252a41",
          colorInputText: "#fff",
          colorAlphaShade: "#fff",
        }
      }}
    >
      <html lang="en">
        <body className="min-h-screen w-full overflow-auto">
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </html>
    </ClerkProvider>
  );
}
