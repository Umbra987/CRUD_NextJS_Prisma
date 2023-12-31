import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/NavBar";

export const metadata = {
  title: "CRUD",
  description: "CRUD by create next app with prisma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
