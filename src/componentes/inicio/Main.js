import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

const Main = () =>{
    const [pokemonInfo, setPokemonInfo] = useState([])
    const [cargando, setCargando] = useState(true)
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    
    useEffect(() =>{
        async function solicitudFetch(){
            let respuesta = await getPokemones(url)
            await cargarInfoPokemones(respuesta.results)
            setCargando(false)
        }
        
        solicitudFetch()
    }, []) 

    //obtener los pokemones de la petición
    function getPokemones(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data =>{
                    resolve(data)
                })
        })
    }

    //guardar la información en el estado pokemoninfo
    const cargarInfoPokemones = async data =>{
        let datosPokemon = await Promise.all(
            data.map(async pokemon =>{
                let guardarPokemon = await getPokemon(pokemon.url)
                return guardarPokemon
            })
        )
        setPokemonInfo(datosPokemon)
    }

    //obtener la información proveniente de las url de cada pokemon
    async function getPokemon(url){
        return new Promise((resolve, reject) =>{
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        })
    }

    /*pokemonInfo.map((pokemon, i) =>{
        console.log(pokemon.stats[0].base_stat)
        console.log(pokemon.types[0].type.name)
    })*/
    return(
        <div className="Main">
            {
                cargando ? <h3>Cargando...</h3> :(
                    pokemonInfo.map((pokemon, i) =>{
                        return(
                            <article className="Main__article" key={i}>
                                <div className="Main__divImg">
                                    <img className="Main__Img" src={pokemon.sprites.other.dream_world.front_default} alt="pokemon"/>
                                </div>
                                <div className="Main__divLink">
                                    <Link to={`/pokemon/${pokemon.name}`} className="Main__link">{pokemon.name}</Link>
                                </div>
                                <div className="Main__divStats">
                                    <p className="Main__tipo">Tipo: <span className="Main__span">{pokemon.types[0].type.name}</span> </p>
                                    <p className="Hp">HP: <span className="Main__span">{pokemon.stats[0].base_stat}</span> </p>
                                </div>
                            </article>
                        )
                    })    
                )
            }
        </div>
    )
}

export default Main