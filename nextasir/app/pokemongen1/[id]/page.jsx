'use client'
import MasInfoPokemons from '@/componentes/MasInfoPokemons';

export default function Page({ params }){
    const {id} = params;

    return (
        <MasInfoPokemons id={id}/>
    );
}