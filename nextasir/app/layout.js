'use client'
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Suspense, use, useState } from "react";
import Link from "next/link";
import { getDictionary } from "@/componentes/diccionario";
import  "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from "@/AddBootstrap";

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

// export const metadata = {
//   title: "Página prinicpal de IAW",
//   description: "Curso 2024/25",
//   icons: {
//     icon: '/buscar.png'
//   }
// };


function Cargando() {
  return (
    <img className="imagen" src="/Loading_2.gif"></img>
  )
}


export default function RootLayout({ children }) {
  const pathname = usePathname();
  let [idioma,setIdioma]=useState('en');
    let dict=getDictionary(idioma);
    
    const changeLanguage = (lang) => {
      setIdioma(lang);
    }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AddBootstrap/>
          <nav>
            <Link href="/">{dict.home}</Link> 
            <Link href="/pokemongen1">Gen 1</Link>  
            <Link href="/pokemongen2">Gen 2</Link>
            <Link href="/pokemongen3">Gen 3</Link>
            <button onClick={() => changeLanguage('es')} className="p-2 rounded-full hover:bg-gray-200"><Image src="/spain.png" alt="Español" width={24} height={24} /></button>
            <button onClick={() => changeLanguage('en')} className="p-2 rounded-full hover:bg-gray-200"><Image src="/uk.png" alt="Inglés" width={24} height={24} /></button>
            <button onClick={() => changeLanguage('fr')} className="p-2 rounded-full hover:bg-gray-200"><Image src="/france.png" alt="Frances" width={24} height={24} /></button>
          </nav>
          <main>
            <h1>{dict.title}</h1>
            <h2>{dict.description}</h2>
            {children}
          </main>
      </body>
    </html>
  );
}