'use client'
import React, { use, useState } from 'react';
import Modal from '@/componentes/Modal';
import RandomGen1 from '@/componentes/RandomGen1'; 

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>10 pokemones aleatorios de la generacion 1</h1>
      <RandomGen1 />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Este es el modal para Pokémon Generación 1</h2>
        <p>Puedes mostrar información adicional aquí sobre los Pokémon, o cualquier otro contenido.</p>
      </Modal>
    </>
  );
}
