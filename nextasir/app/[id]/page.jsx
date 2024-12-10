'use client'
import { use } from 'react';
import MasInfoPokemonsRandom from '@/componentes/MasInfoPokemonsRandom';

export default function Page({ params }){
    const {id} = use(params);/*Se usa el params como el id que varia */

    return (
        <MasInfoPokemonsRandom id={id}/> /*usa el componente para sacar la info del id del pokemon */
    );
}