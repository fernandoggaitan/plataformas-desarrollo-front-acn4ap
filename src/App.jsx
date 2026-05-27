//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importamos los componentes de enturamiento
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Container from 'react-bootstrap/Container';

//Menú
import Menu from './components/Menu';

//Contextos
import AuthProvider from './contexts/AuthContext';

//Páginas
import CandidatosLista from './pages/CandidatosLista';
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App(){

  return (

    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path='/' element={<h1> Bienvenida/o a mi sitio </h1>} />
            <Route path='/candidatos' element={<CandidatosLista />} />
            <Route path='/pokemones' element={<Pokemons />} />
            <Route path='/pokemon/:nombre' element={<Pokemon />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<h1> Error 404 </h1>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>

  )

}