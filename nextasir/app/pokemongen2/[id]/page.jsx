'use client'
import { use } from 'react';
import MasInfoPokemons2 from '@/componentes/MasInfoPokemons2';

export default function Page({ params }){
    const {id} = use(params);

    return (
        <MasInfoPokemons2 id={id}/>
    );
}