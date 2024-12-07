import React from 'react'
import style from '../paginaWeb/nav.module.css'
import { IoIosContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosPaper } from 'react-icons/io';
import { IoMdPhotos } from "react-icons/io";
import { FaClipboardList } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';

function Nav2() {
  return (
    <nav>
        <Link to="/" className={style.contenidonav}><FaHome />Inicio</Link> 
        <Link to="/noticias" className={style.contenidonav}><IoIosPaper />Noticias</Link>
        <Link to="/noticias/jefatura" className={style.contenidonav}><FaClipboardList />Noticias Jefatura</Link>
        <Link to="/noticias/igualdad" className={style.contenidonav}><FaLaptop />Noticias Igualdad</Link> 
        <Link to="/fotos" className={style.contenidonav}><IoMdPhotos />Fotos</Link>
        <Link to="/contacto" className={style.contenidonav}><IoIosContact />Contacto</Link> 
    </nav>
  )
}

export default Nav2