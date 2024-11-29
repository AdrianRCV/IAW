import Link from "next/link";

export default function Page() {
    return (<>
        <h1>Generaciones</h1>
        <Link href="/pokemon/gen1">Generación 1</Link>
        <Link href="/pokemon/gen2">Generación 2</Link>
        <Link href="/pokemon/gen3">Generación 3</Link>
        </>
    );
}