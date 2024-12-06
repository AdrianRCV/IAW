'use client'
import React, { use, useState } from 'react';
import RandomGen3 from '@/componentes/RandomGen3'; 

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>10 pokemones aleatorios de la generacion 3</h1>
      <RandomGen3/>
    </>
  );
}
