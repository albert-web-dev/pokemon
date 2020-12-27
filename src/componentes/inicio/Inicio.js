import React from 'react';

//componentes
import UseSlider from './useSlider'
import Main from './Main'

function Inicio(){
    return(
        <section className="Inicio">
            <div className="Inicio__container">
                <section className="Inicio__Slider">
                    <UseSlider/>
                </section>
                <section className="Inicio__Main">
                    <Main/>
                </section>
            </div>
        </section>
    )
}

export default Inicio