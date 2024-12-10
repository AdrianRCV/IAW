import React from 'react'
import Header from './Header'
import Contenido from './Contenido'
import Footer from './Footer'

function Web() {
  return (
    <>
    <Header/>
    <Contenido/>
    <Footer RRSS={[{nombre:"Facebook",url:"https://www.facebook.com"},{nombre:"Instagram",url:"https://www.instagram.com"},{nombre:"Linkedin",url:"https://www.linkedin.com"},{nombre:"Google",url:"https://www.google.com"}]}/>
    </>
  )
}

export default Web