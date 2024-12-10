'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { redirect } from 'next/navigation';

const MasInfoPokemons3 = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error('Error al cargar el Pokémon');
        const data = await response.json();

        const pokemonData = {
          id: data.id,
          name: data.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
        };

        setPokemon(pokemonData);
        setShowModal(true);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  const handleClose = () => redirect('/pokemongen3');
  const handleSiguiente = () => redirect('')  /*Aca deberia de insertar para que rediriga a (iddelpokemonenlaruta)+1 */
  const handleAnterior = () => redirect('')  /*Aca deberia de insertar para que rediriga a (iddelpokemonenlaruta)-1 */ 

  if (loading) return <img src='./Loading_2.gif'></img>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Modal.Title style={{ flex: 1, textAlign: 'center', margin: 0 }}>{pokemon.name.toUpperCase()}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center'}}>
          <Image src={pokemon.img} alt={pokemon.name} width={300} height={300} unoptimized />
          <p><strong>HP:</strong> {pokemon.hp}</p>
          <p><strong>Ataque:</strong> {pokemon.attack}</p>
          <p><strong>Defensa:</strong> {pokemon.defense}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="secondary" onClick={handleSiguiente}>Siguiente</Button>
          <Button variant="secondary" onClick={handleAnterior}>Anterior</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const metadata = {
  title: "Detalle del Pokemon",
  icons: {
    icon: '/iconopoke.png'
  }
};

export default MasInfoPokemons3;