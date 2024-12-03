import React from 'react';
import styles from '../app/modal.css'; 

const Modal = ({ isOpen, onClose, pokemonData }) => {
  if (!isOpen) return null; 

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className="pokemon-details">
          <p>Número: {pokemonData.numero}</p>
          <h2>{pokemonData.nombre}</h2>
          <img src={pokemonData.img} alt={pokemonData.nombre} className={styles.imagen} />
          <p>HP: {pokemonData.hp}</p>
          <p>Ataque: {pokemonData.ataque}</p>
          <p>Defensa: {pokemonData.defensa}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
