'use client'
import { use } from 'react';
import MasInfoPokemonsRandom from '@/componentes/MasInfoPokemonsRandom';

export default function Page({ params }){
    const {id} = use(params);

    return (
        <MasInfoPokemonsRandom id={id}/>
    );
}