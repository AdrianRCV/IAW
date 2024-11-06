import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import json2 from '../heroes.json'

export default function HeroSelect() {
  const [hero, setHero] = React.useState('');

  const handleChange = (event) => {
    setHero(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Hero</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hero}
          label="Select Hero"
          onChange={handleChange}
        >
          {json2.publisher.map((publisherOption) => (
              <MenuItem key={publisherOption.id} value={publisherOption.publisher}>{publisherOption.publisher}
              </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
