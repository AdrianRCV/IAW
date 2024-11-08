import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './cards.module.css';

function Tarjeta() {
  return (
    <>
      <Card style={{ width: '18rem'}} className={style.imgcards}>
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png" />
          <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text>
          React es una biblioteca de JavaScript de código abierto utilizada 
          para construir interfaces de usuario, especialmente para 
          aplicaciones web de una sola página.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className={style.imgcards}>
          <Card.Img variant="top" src="https://www.digitality.es/img-articulos/ampliadas/que-es-nextjs-y-para-que-sirve-1-1697560678.jpg" />
          <Card.Body>
          <Card.Title>Next</Card.Title>
          <Card.Text>
           Next.js es un framework de React que facilita la creación de aplicaciones
           web modernas y optimizadas, proporcionando una serie de características
           y herramientas adicionales.
          </Card.Text> 
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className={style.imgcards}>
          <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1400/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg" />
          <Card.Body>
          <Card.Title>Nest</Card.Title>
          <Card.Text>
          NestJS es un framework de desarrollo backend para Node.js que utiliza 
          TypeScript por defecto y se basa en una arquitectura de modulos y 
          controladores similar a la de frameworks como Angular.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
    </>
  );
}

export default Tarjeta;