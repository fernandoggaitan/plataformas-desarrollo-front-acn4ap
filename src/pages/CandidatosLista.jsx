import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CandidatoItem from '../components/CandidatoItem';
import { useState } from 'react';

const candidatos = [
    {
        ID: 1,
        nombre: "Sofía",
        imagen: "https://randomuser.me/api/portraits/women/90.jpg",
        votos: 5
    },
    {
        ID: 2,
        nombre:"Pablo",
        imagen: "https://randomuser.me/api/portraits/men/49.jpg",
        votos: 3   
    },
    {
        ID: 3,
        nombre: "Valeria",
        imagen: "https://randomuser.me/api/portraits/women/61.jpg",
        votos: 2
    }
];

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

                {
                    candidatos.map( c => (
                        <Col key={c.ID}>
                            <CandidatoItem 
                                nombre={c.nombre}
                                imagen={c.imagen}
                                onChangeVotos={handleCantidadVotos}
                            />
                        </Col>
                    ))
                }
                             
            </Row>

        </>
    )

}