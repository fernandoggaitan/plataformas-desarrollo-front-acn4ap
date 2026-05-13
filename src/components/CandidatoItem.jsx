import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

//Compomente hijo.
export default function CandidatoItem( {nombre, imagen, onChangeVotos} ){

    const [votos, setVotos] = useState(0);

    const incrementar = () => {
        let votos_nuevo = votos + 1;
        onChangeVotos(votos, votos_nuevo);
        setVotos(votos_nuevo);
    }

    const decrementar = () => {
        if(votos > 0){
            let votos_nuevo = votos - 1;
            onChangeVotos(votos, votos_nuevo);
            setVotos(votos_nuevo);
        }        
    }

    const handleVotos = (e) => {
        let votos_nuevo = Number(e.target.value);
        if(votos_nuevo > 0){
            onChangeVotos(votos, votos_nuevo);
            setVotos(votos_nuevo);
        }
    }

    return (
        <Card>
            <Card.Img style={ {maxWidth: '128px'} } variant="top" src={imagen} />
            <Card.Body>
                <Card.Title> {nombre} </Card.Title>
                <Button onClick={incrementar} variant="success" className='m-1'> + </Button>
                <Button disabled={votos < 1} onClick={decrementar} variant="danger" className='m-1'> - </Button>
                <Form.Control type="number" value={votos} onChange={handleVotos} />
            </Card.Body>
        </Card>
    )

}