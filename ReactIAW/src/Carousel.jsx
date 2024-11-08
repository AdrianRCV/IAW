import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"25%"}}>
      <Carousel.Item>
        <img width="600px" height="460px" src="https://turismo.huercal-overa.es/wp-content/uploads/2022/01/Foto-Ayuntamiento-Huercal-Overa.jpg" alt="Ayuntamiento Huércal-Overa"/>
        <Carousel.Caption>
          <h3>Ayuntamiento Huércal-Overa</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" height="460px" src="https://s3.ppllstatics.com/ideal/levante/multimedia/202002/14/media/cortadas/HO-ies-cura-valera2-kbuH-U100155323650pVG-1248x770@Ideal.jpg" alt="IES Cura Valera"/>
        <Carousel.Caption>
          <h3>IES Cura Valera</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" height="460px" src="https://almeria360.com/estaticos/2024/06/IES-Albujaira-1.jpeg" alt="IES Albujaira" />
        <Carousel.Caption>
          <h3>IES Albujaira</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;