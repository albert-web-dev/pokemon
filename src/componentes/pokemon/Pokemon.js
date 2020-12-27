import React, { useState, useEffect } from 'react';

const Pokemon = (pokemon) =>{
    const [pokemoninfo, setPokemoninfo] = useState([])
    const [nombre, setNombre] = useState(pokemon)
    
    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.match.params.nombre}`)
            .then(res => res.json())
            .then(res=>{
                setPokemoninfo(res)
            })
    },[]) 

    if(Object.keys(pokemoninfo).length !== 0){
        return(
            <section className="Pokemon">
                <article className="Pokemon__article">
                    
                    <div className="Pokemon__divH2">
                        <h2 className="Pokemon__H2">{pokemoninfo.name}</h2>
                    </div>
                    
                    <figure className="Pokemon__figure">
                        <img className="Pokemon__Img" src={pokemoninfo.sprites.other.dream_world.front_default} alt="pokemon"/>
                    </figure>
                    
                    <div className="Pokemon__Stats">
                        <h3 className="Pokemon__H3">Estadísticas</h3>
                        <div className="Pokemon__divStats">
                            {
                                pokemoninfo.stats.map((est, i) =>{
                                    return(
                                        <div key={i}><p className="Pokemon__p">{est.stat.name } <span className="Pokemon__span">{est.base_stat}</span></p></div>
                                    )
                                })
                            }
                        </div>
                    </div>
    
                    <div className="Pokemon__Types">
                        <h3 className="Pokemon__H3">Tipo</h3>  
                        <div className="Pokemon__divTypes">
                            {
                                pokemoninfo.types.map((tipo, i) =>{
                                    return(
                                        <div key={i}><p className="Pokemon__p">{tipo.type.name }</p></div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="Pokemon__games">
                        <div className="Pokemon__divH3">
                            <h3 className="Pokemon__H3">Juegos en que aparece</h3>
                        </div>
                        <div className="Pokemon__divGames">
                            {
                                pokemoninfo.game_indices.map((game, i) =>{
                                    return(
                                        <div className="Pokemon__nombresGames" key={i}><p className="Pokemon__p">{game.version.name}</p></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </article>
            </section>
        )
    }else{
        return(
            <h2 className="Pokemon__H2">El pokémon que buscas no está en nuestra base de datos <br></br>
                                        o tal vez lo haya escrito mal
            </h2>
        )
    }
}

export default Pokemon