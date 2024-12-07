import Link from 'next/link'

export default function Page() {
    return (
        <>
            <h1>NOTICIAS</h1>
            <Link href="/Noticias/Informatica" className="link">Noticias Informática</Link>
            <Link href="/Noticias/Jefatura" className="link">Noticias Jefatura</Link>
            <Link href="/InicioInstituto" className="link">Volver a Página Principal</Link>
        </>
    );
}