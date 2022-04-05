import React , {useState,useEffect} from 'react';
import axios from 'axios';
import './Pokemon.css';

const Pokemon = () => {

    const [pokemon,setPokemon]=useState([]);
    const [click,setClick]=useState(false);

    const onClick = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(respuesta=>{
            console.log(respuesta.data.results);
            setPokemon(
                respuesta.data.results
            )
        }).catch(e=>console.log(new Error('fallo al comunicarse con la api')))
        
    }

    return (
        <div>
            <button onClick={onClick}>Fetch Pokemons</button>
            <ul className="pokemons">
                {pokemon.map((pokemon,indice)=>{
                    return (<li key={indice}> {pokemon.name} </li>)
                })
            }
            </ul>
        </div>
    );
}

export default Pokemon;