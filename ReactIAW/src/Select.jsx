import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import json2 from './heroes.json'; 

export default function HeroSelect() {
  const [hero, setHero] = React.useState('');

  const marvelHeroes = json2.filter(heroOption => heroOption.publisher.trim().toLowerCase() === "marvel comics");

  const handleHeroChange = (event) => {
    setHero(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 252 }}>
      <FormControl fullWidth>
        <InputLabel id="hero-select-label">Hero</InputLabel>
        <Select
          labelId="hero-select-label"
          id="hero-select"
          value={hero}
          label="Select Hero"
          onChange={handleHeroChange}
        >
          {/* Solo muestra las opciones si hay héroes filtrados */}
          {marvelHeroes.map((heroOption) => (
            <MenuItem key={heroOption.superhero} value={heroOption.superhero}>
              {heroOption.superhero} ({heroOption.publisher})
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
