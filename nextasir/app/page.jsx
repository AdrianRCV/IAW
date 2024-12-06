'use client'
import React, { use, useState } from 'react';
import PokemonAleatorio from "@/componentes/PokemonAleatorio";

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <h1 style={{textAlign:'center'}}>Pokemon aleatorio de entre 1000</h1>
            <PokemonAleatorio/>
        </>
    );
}