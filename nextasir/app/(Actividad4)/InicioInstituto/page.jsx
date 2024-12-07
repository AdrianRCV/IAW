import Link from 'next/link'

export default function Page() {
    return (
        <>
            <h1>Página principal del instituto</h1>
            <Link href="/Noticias" className="link">Noticias</Link>
            <Link href="/OfertaEducativa" className="link">Oferta Educativa</Link>
            <Link href="/VideosyFotos" className="link">Vídeos y Fotos</Link>
            <Link href="/Contactos" className="link">Contactos</Link>
        </>
    );
}