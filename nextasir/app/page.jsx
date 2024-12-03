import PokemonAleatorio from "@/componentes/PokemonAleatorio";

export default function HomePage() {
    return (
        <>
            <h1 style={{textAlign:'center'}}>Pokemon aleatorio de entre 1000</h1>
            <PokemonAleatorio/>
        </>
    )
}