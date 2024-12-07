import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Nav2 from "./Nav2";
import Tarjeta from "../paginaWeb/Cards"
import ControlledCarousel from "../Carousel";

export default function Rutas2() {
  return (
    <Router>
        <Nav2/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
	      <Route path="/noticias" element={<MySkills/>}>
          <Route path="/noticias/jefatura" element={<Jefatura/>} />  
          <Route path="/noticias/igualdad" element={<Igualdad/>} />  
        </Route>
        <Route exact path="/fotos" element={<Fotos/>} />
        <Route path="/contacto" element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <>
    <Tarjeta/>
  </>
}

function MySkills() {
  return <div>
    <h1>NOTICIAS DE HUÉRCAL OVERA</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, labore in tempora quae debitis reiciendis tempore eos laborum rerum officia, ipsam doloribus iusto repudiandae earum sunt voluptatibus alias doloremque beatae!
    Ipsa numquam, error ducimus, voluptate libero sit rem eius dolores neque porro tenetur culpa dolorem cupiditate, doloribus totam odio sint officia iusto eveniet ab labore. Esse dolore molestias perspiciatis ullam?
    Quam quasi quas laudantium ipsam fugit ullam? Aliquam molestiae perferendis odio. Dolorum perspiciatis cum ratione nihil pariatur non voluptatum, ducimus repellat minus! Tempore distinctio, rem similique incidunt blanditiis veritatis facilis!
    Fuga, recusandae. Similique provident id accusantium commodi maxime ea doloremque fugiat vel dignissimos! Veritatis saepe minus maiores magnam assumenda accusantium similique praesentium nam, vel doloribus placeat ullam repudiandae repellat? Delectus.
    Distinctio consequuntur quaerat reiciendis, id animi repudiandae enim quae! Amet eaque ad reiciendis corrupti, ullam hic maxime ea enim est totam? Eum explicabo vitae est praesentium nihil. Quam, error iusto.</p>
    <hr/>
    <Outlet/>
  </div>
}

function Jefatura() {
  return <h2>NOTICIAS DE JEFATURA</h2>;
}

function Igualdad() {
  return <h2>NOTICIAS DE IGUALDAD</h2>;
}

function Fotos() {
  return <>
    <ControlledCarousel/>
  </>
}

function NoPage() {
    return <h2>PÁGINA DE ERROR 404</h2>;
}
