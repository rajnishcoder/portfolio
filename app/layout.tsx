import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./nav/Navbar";

const roboto = Roboto({
  weight: ['100', '300', '400'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className + ' font-light'}>
        <div className="bg-zinc-800 text-slate-200">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
