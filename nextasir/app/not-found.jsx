"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Error() {
    const router = useRouter();
    const goToHome = () => {
        router.push('/');
      };

    return (
        <>
        <div>
            <h2>Página no encontrada</h2>
            <Link href="/InicioInstituto"><button>Regresar</button></Link>
        </div>
        </>
    );
}