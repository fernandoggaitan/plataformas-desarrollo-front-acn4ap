import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

export default function Menu() {

  const {is_logueado, logout} = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Página principal</Nav.Link>
            <Nav.Link as={Link} to="/candidatos">Lista de candidata/os</Nav.Link>
            <Nav.Link as={Link} to="/pokemones">Ejemplo de pokemones</Nav.Link>

            {
              (is_logueado)
              ?
                <>
                  <Nav.Link as={Link} to="/dashboard"> Perfil </Nav.Link>
                  <Button onClick={handleLogout} variant='danger'> Cerrar sesión </Button>
                </>
              :
                <Nav.Link as={Link} to="/login"> Login </Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}