import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import json2 from './heroes.json'; // Asegúrate de que la ruta sea correcta

export default function HeroSelect() {
  const [hero, setHero] = React.useState('');
  const [publisher, setPublisher] = React.useState(''); // Estado para el publisher seleccionado

  // Función que maneja el cambio de selección de héroe
  const handleHeroChange = (event) => {
    setHero(event.target.value);
  };

  // Función que maneja el cambio de publisher
  const handlePublisherChange = (event) => {
    setPublisher(event.target.value);
  };

  // Filtrar héroes por publisher
  const filteredHeroes = publisher
    ? json2.filter((heroOption) => heroOption.publisher === publisher)
    : json2;  // Si no hay publisher seleccionado, no filtra y muestra todos los héroes.

  console.log(filteredHeroes); // Agrega esta línea para verificar los héroes filtrados en la consola

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="publisher-select-label">Select Publisher</InputLabel>
        <Select
          labelId="publisher-select-label"
          id="publisher-select"
          value={publisher}
          label="Select Publisher"
          onChange={handlePublisherChange}
        >
          <MenuItem value="">All</MenuItem>   {/* Opción para no filtrar */}
          <MenuItem value="Marvel">Marvel</MenuItem>
          <MenuItem value="DC Comics">DC Comics</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="hero-select-label">Select Hero</InputLabel>
        <Select
          labelId="hero-select-label"
          id="hero-select"
          value={hero}
          label="Select Hero"
          onChange={handleHeroChange}
        >
          {filteredHeroes && filteredHeroes.map((heroOption) => (
            <MenuItem key={heroOption.superhero} value={heroOption.superhero}>
              {heroOption.superhero} ({heroOption.publisher})
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
