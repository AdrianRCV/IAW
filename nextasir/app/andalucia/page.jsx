'use client'
import Image from 'next/image';
import Link from 'next/link';

function CarouselHorizontal() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{width:'17%',marginTop:'20px'}}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="text-center">
            <Image src="../almeria.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
            <div>
              <h3>ALMERÍA</h3>
              <Link href="/andalucia/almeria">
                <h4>¿Quieres saber más?</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="text-center">
            <Image src="../granada.jpg" width="500" height="450" alt="Granada" unoptimized="true" />
            <div>
              <h3>GRANADA</h3>
              <Link href="/andalucia/granada">
                <h4>¿Quieres saber más?</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="text-center">
            <Image src="sevilla.jpg" width="500" height="450" alt="Sevilla" unoptimized="true" />
            <div>
              <h3>SEVILLA</h3>
              <Link href="/andalucia/sevilla">
                <h4>¿Quieres saber más?</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="text-center">
            <Image src="malaga.jpg" width="500" height="450" alt="Málaga" unoptimized="true" />
            <div>
              <h3>MÁLAGA</h3>
              <Link href="/andalucia/malaga">
                <h4>¿Quieres saber más?</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselHorizontal;
