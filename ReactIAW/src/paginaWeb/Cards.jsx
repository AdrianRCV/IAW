import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './cards.module.css';

export const CardItem = (props) => {
  return (
    <Card style={{ width: '18rem' }} className={style.imgcards}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary" href={props.buttonLink}>
          {props.buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

function Tarjeta() {
  const cardsData = [
    {
      title: "React",
      text: "React es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario, especialmente para aplicaciones web de una sola página.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png",
      buttonText: "Go somewhere",
      buttonLink: "#",
    },
    {
      title: "Next",
      text: "Next.js es un framework de React que facilita la creación de aplicaciones web modernas y optimizadas, proporcionando una serie de características y herramientas adicionales.",
      imgSrc: "https://www.digitality.es/img-articulos/ampliadas/que-es-nextjs-y-para-que-sirve-1-1697560678.jpg",
      buttonText: "Go somewhere",
      buttonLink: "#",
    },
    {
      title: "Nest",
      text: "NestJS es un framework de desarrollo backend para Node.js que utiliza TypeScript por defecto y se basa en una arquitectura de módulos y controladores similar a la de frameworks como Angular.",
      imgSrc: "https://miro.medium.com/v2/resize:fit:1400/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg",
      buttonText: "Go somewhere",
      buttonLink: "#",
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <CardItem
          key={index}
          {...card} // Pasa todas las propiedades como un solo objeto
        />
      ))}
    </>
  );
}

export default Tarjeta;
