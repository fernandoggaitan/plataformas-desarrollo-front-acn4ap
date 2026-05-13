import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CandidatoItem from './CandidatoItem';
import { useState } from 'react';

//Compomente padre.
export default function CandidatosLista(){

    const [cantidad_votos, setCantidadVotos] = useState(0);

    const handleCantidadVotos = (votos_viejo, votos_nuevo) => {
        setCantidadVotos(cantidad_votos - votos_viejo + votos_nuevo);
    }

    return (
        <>

            <h1> Lista de candidata/os </h1>

            <p> Cantidad de votos: {cantidad_votos} </p>

            <Row xs={1} md={3} className="g-4">
                <Col>
                    <CandidatoItem 
                        nombre="Sofía"
                        imagen="https://randomuser.me/api/portraits/women/90.jpg"
                        onChangeVotos={handleCantidadVotos}
                    />
                </Col>
                <Col>
                    <CandidatoItem 
                        nombre="Pablo"
                        imagen="https://randomuser.me/api/portraits/men/49.jpg" 
                        onChangeVotos={handleCantidadVotos}
                    />
                </Col>
                <Col>
                    <CandidatoItem 
                        nombre="Valeria"
                        imagen="https://randomuser.me/api/portraits/women/61.jpg" 
                        onChangeVotos={handleCantidadVotos}
                    />
                </Col>
            </Row>

        </>
    )

}