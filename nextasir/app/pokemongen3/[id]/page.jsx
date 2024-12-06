'use client'
import { use } from 'react';
import MasInfoPokemons3 from '@/componentes/MasInfoPokemons3';

export default function Page({ params }){
    const {id} = use(params);

    return (
        <MasInfoPokemons3 id={id}/>
    );
}