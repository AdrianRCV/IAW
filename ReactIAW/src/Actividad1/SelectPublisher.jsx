import React, { useState } from 'react';
import { TablaHeroesDC, TablaHeroesMarvel } from './TablaHeroes.jsx';

const SelectorHeroes = () => {
  const [selectedPublisher, setSelectedPublisher] = useState('DC Comics');

  const handleChange = (event) => {
    setSelectedPublisher(event.target.value);
  };

  return (
    <div>
      <h1>Elige un Publisher para ver sus héroes</h1>
      <select onChange={handleChange} value={selectedPublisher}>
        <option value="DC Comics">DC Comics</option>
        <option value="Marvel Comics">Marvel Comics</option>
      </select>
      {selectedPublisher === 'DC Comics' && <TablaHeroesDC />}
      {selectedPublisher === 'Marvel Comics' && <TablaHeroesMarvel />}
    </div>
  );
};

export default SelectorHeroes;
