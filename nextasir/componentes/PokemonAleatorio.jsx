'use client'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/navigation';

const PokemonAleatorio = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchRandomPokemons = async () => {
            let randomPokemons = [];
            let randomIds = [];

            while (randomPokemons.length < 1) {
                const randomId = Math.floor(Math.random() * 1000) + 1; 
                if (!randomIds.includes(randomId)) {
                    randomIds.push(randomId);
                    try {
                        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
                        if (!response.ok) throw new Error('Error al cargar los Pokémon');
                        const data = await response.json();

                        const pokemonData = {
                            numero: data.id,
                            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                            nombre: data.name,
                            hp: data.stats[0].base_stat,
                            ataque: data.stats[1].base_stat,
                            defensa: data.stats[2].base_stat,
                        };
                        randomPokemons.push(pokemonData);
                    } catch (err) {
                        setError(err.message);
                    }}}
            setPokemons(randomPokemons);
            setLoading(false);
        };
        fetchRandomPokemons();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="pokemon-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
            {pokemons.map((pokemon, index) => (
                <Card key={index} style={{ height: '350px', margin: '10px', width: '250px', border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
                    <h3>{pokemon.nombre}</h3>
                    <img src={pokemon.img} alt={pokemon.nombre} style={{ width: '100%', height: 'auto' }} />
                    <button onClick={() => router.push(`/${pokemon.numero}`)}style={{ marginTop: '10px', padding: '10px', cursor: 'pointer' }}>Más información</button>
                </Card>
            ))}
        </div>
    );
};

export default PokemonAleatorio;