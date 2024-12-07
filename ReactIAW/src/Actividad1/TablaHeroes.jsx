import React from 'react';
import json2 from '../heroes.json';
import styles from './tablaheroes.module.css'

export const TablaHeroesDC = () => {
  const filteredHeroesDC = json2.filter((heroe) => heroe.publisher === 'DC Comics');

  return (
    <div>
      <h2>DC Heroes</h2>
      <table>
        <thead>
          <tr>
            <th>Superhero</th>
            <th>Alter Ego</th>
            <th>First Appearance</th>
            <th>Character</th>
          </tr>
        </thead>
        <tbody>
          {filteredHeroesDC.map((heroe, index) => (
            <tr key={index}>
              <td>{heroe.superhero}</td>
              <td>{heroe.alter_ego}</td>
              <td>{heroe.first_appearance}</td>
              <td>{heroe.characters}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TablaHeroesMarvel = () => {
  const filteredHeroesMarvel = json2.filter((heroe) => heroe.publisher === 'Marvel Comics');

  return (
    <div>
      <h2>Marvel Heroes</h2>
      <table>
        <thead>
          <tr>
            <th>Superhero</th>
            <th>Alter Ego</th>
            <th>First Appearance</th>
            <th>Character</th>
          </tr>
        </thead>
        <tbody>
          {filteredHeroesMarvel.map((heroe, index) => (
            <tr key={index}>
              <td>{heroe.superhero}</td>
              <td>{heroe.alter_ego}</td>
              <td>{heroe.first_appearance}</td>
              <td>{heroe.characters}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
