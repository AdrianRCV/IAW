import React from 'react';
import Card from 'react-bootstrap/Card';
import style from './cards.module.css';
import data from './noticias.json'
import { useState, useEffect } from "react";

const JsonDataLoader = () => {
    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
      // Simula la carga de datos desde un archivo JSON
      setDatos(data);
    }, []);
    
    return (
      <>
          {datos.map((datos, index) => (
            <Card style={{ width: '18rem' }} className={style.imgcards} key={index}>
              <Card.Img variant="top" src={datos.imagen} />  
              <p>{datos.titulo}</p>
              <p>{datos.texto}</p> 
            </Card>
          ))}
      </>
    );
    };
    
    export default JsonDataLoader;