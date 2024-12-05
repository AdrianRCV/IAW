'use client'
import React, { use, useState } from 'react';
import RandomGen1 from '@/componentes/RandomGen1'; 

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>10 pokemones aleatorios de la generacion 1</h1>
      <RandomGen1 />
    </>
  );
}
