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
            <h2>Something went wrong!</h2>
            <button onClick={goToHome}> Botón con useRouter </button>
        </div>
        </>
    );
}