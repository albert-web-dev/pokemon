import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { useRef, useState } from 'react'

const Nav = () =>{
    const [state, setState] = useState({
        pokemon: '',
        rediceccion: false
    })
    const nombrePokemon = useRef('');

    const Redireccionar = (e) =>{
        e.preventDefault();

        if(nombrePokemon.current.value !== ''){
            setState({
                pokemon: nombrePokemon.current.value,
                rediceccion: true
            })
            e.currentTarget.reset()
        }else{
            console.log('empty')
            e.currentTarget.reset()
        }
    }
    
    if(state.rediceccion){
        return(
            <nav className="Menu">
                <div className="Menu__inicio">
                    <Link className="Menu__link" to='/inicio' >Inicio</Link>
                </div>
                <form onSubmit={Redireccionar} className="Menu__inputIcono" >
                    <input ref={nombrePokemon} className='Menu__input' type="text" placeholder="Buscar Pokémon" />
                </form>
                <Redirect to={`/redirect/${state.pokemon}`} />
            </nav>
        )
    }

    return(
        <nav className="Menu">
            <div className="Menu__inicio">
                <Link className="Menu__link" to='/inicio' >Inicio</Link>
            </div>
            <form onSubmit={Redireccionar} className="Menu__inputIcono" >
                <input ref={nombrePokemon} className='Menu__input' type="text" placeholder="Buscar Pokémon" />
            </form>
        </nav>
    )
}

export default Nav