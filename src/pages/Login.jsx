import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

export default function Login(){

    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        //Anulamos el comportamiento de enviar el formulario.
        e.preventDefault();
        login();
        //Cambiamos a la página de Dashboard.
        navigate("/dashboard");
    }

    return (
        <>
            <h1> Inicie sesión </h1>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control placeholder='Ingrese su correo electrónico' />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder='Ingrese su contraseña' />
                    </Col>
                </Form.Group>
                <Button onClick={handleLogin} type='submit' variant='primary'> Iniciar sesión </Button>
            </Form>
        </>
    )

}