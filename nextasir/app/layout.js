'use client';
import localFont from "next/font/local";
import "./globals.css";
import { useState } from "react";
import { getDictionary } from "@/componentes/diccionario";
import AddBootstrap from "@/AddBootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  let [idioma, setIdioma] = useState('en');
  let dict = getDictionary(idioma);

  const changeLanguage = (lang) => {
    setIdioma(lang);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AddBootstrap />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
