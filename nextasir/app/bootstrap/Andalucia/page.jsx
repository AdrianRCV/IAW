'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import VentanaModal from '@/componentes/Detalle';

function carouselAndalucia() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src="/almeria.jpg" width="400" height="350" alt="almeria" />
        <Carousel.Caption>
          <h3>Almeria</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="/cadiz.jpg" unoptimized="true" width="400" height="350" alt="cadiz" />
        <Carousel.Caption>
          <h3>Cádiz</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="/cordoba.jpg" width="400" height="350" alt="cordoba" unoptimized="true" />
        <Carousel.Caption>
          <h3>Córdoba</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/granada.jpg" width="400" height="350" alt="granada" />
        <Carousel.Caption>
          <h3>Granada</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/huelva.jpg" width="400" height="350" alt="huelva" />
        <Carousel.Caption>
          <h3>Huelva</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/jaen.jpg" width="400" height="350" alt="jaen" />
        <Carousel.Caption>
          <h3>Jaén</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/malaga.jpg" width="400" height="350" alt="malaga" />
        <Carousel.Caption>
          <h3>Málaga</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/sevilla.jpg" width="400" height="350" alt="sevilla" />
        <Carousel.Caption>
          <h3>Sevilla</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carouselAndalucia;