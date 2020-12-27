import React, {useState, useEffect} from 'react';
import Slider from "react-slick";

const UseSlider = () =>{
    const [state, setState] = useState([])

    const images = [16, 56, 580, 543, 330, 111, 48, 200, 306, 257, 222, 187, 595, 150, 221, 374, 197, 210]

    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/type?limit=18/`)
            .then(res => res.json())
            .then(res =>{
                setState(res.results)
            })
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    if(Object.keys(state).length !== 0){
        return(
            <div className="Slider">
                <div className="Slider__h2container">
                    <h2 className="Slider__H2">Tipos de Pokémon </h2>
                </div>
                <Slider className="Slider__slider" {...settings}>
                    {
                    state.map((typo, i) =>{
                            return(
                                <article key={i} className="Slider__article">
                                    <div className="Slider__imgContainer">
                                        <img className="Slider__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${images[i]}.svg`} alt="tipo" />
                                    </div>
                                    <h3 className="Slider__h3">{typo.name}</h3>
                                </article>
                            )
                        }) 
                    }
                </Slider>
            </div>
        )
    }else{
        return(
            <h2>Cargando...</h2>
        )
    }
}

export default UseSlider