import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Nav from "./Nav";

export default function Rutas() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
	    <Route path="/usuario/:nombre" element={<MySkills/>} />
        <Route path="/producto/:numero" element={<Producto/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <div>home</div>;
}

function About() {
  return <div>about</div>;
}

function MySkills() {
    const params = useParams();
    return <>
        <h2>Parámetro introducido: {params.nombre}</h2>
        <p>El usuario elegido es {params.nombre}</p>
        <img src="/avatar1.png"></img>
    </>
}

function NoPage() {
    return <h2>La página que has solicitado no existe</h2>;
}

function Producto() {
    const params = useParams();
    return <h2>PRODUCTO ELEGIDO: {params.numero}</h2>;
}