import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

export default function Pokemons(){

    const [lista, setLista] = useState( [] );
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [url_anterior, setUrlAnterior] = useState(null);
    const [url_siguiente, setUrlSiguiente] = useState(null);

    useEffect( () => {
        getLista();
    }, [url] );

    const getLista = async() => {
        try{
            const response = await fetch(url);
            const json = await response.json();
            setLista(json.results);
            setUrlAnterior(json.previous);
            setUrlSiguiente(json.next);
        }catch(error){
            alert("Error, por favor intente más tarde :(");
        }
    }

    const getId = (apiUrl) => {
        const match = apiUrl.match(/\/(\d+)\/?$/);
        if (!match) return null;
        const id = match[1];
        return id;
    }

    const getShinyImageUrl = (apiUrl) => {
        const id = getId(apiUrl);
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;
    }

    return (
        <>
            <h1> Lista de pokemones </h1>
            <Button onClick={() => setUrl(url_anterior)} disabled={url_anterior == null} variant='primary'> Página anterior </Button>
            { url }
            <Button onClick={() => setUrl(url_siguiente)} disabled={url_siguiente == null} variant='primary'> Página siguiente </Button>
            <Row>
                {
                    lista.map(item => (
                        <Col lg={3} md={6} sm={12} key={item.name}>
                            <img src={getShinyImageUrl(item.url)} alt={item.name} />
                            <Link to={`/pokemon/${item.name}`}>
                                {item.name}
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </>
    )

}