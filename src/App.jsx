//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importamos los componentes de enturamiento
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Container from 'react-bootstrap/Container';

//Menú
import Menu from './components/Menu';

//Páginas
import CandidatosLista from './components/CandidatosLista';
import Pokemons from './components/Pokemons';

export default function App(){

  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path='/' element={<h1> Bienvenida/o a mi sitio </h1>} />
          <Route path='/candidatos' element={<CandidatosLista />} />
          <Route path='/pokemones' element={<Pokemons />} />
          <Route path='*' element={<h1> Error 404 </h1>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )

}