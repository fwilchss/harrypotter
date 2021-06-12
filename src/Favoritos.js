import React from "react"
import { connect } from 'react-redux';

const Favoritos = ({favoritos, quitarfavoritos}) => (
    <section>
        <ul className="cont">
            {
                favoritos.map(j => (
                    <li>
                        <img src={j.image} alt={j.name}/> <button onClick={() => quitarfavoritos(j)}>X</button>
                    </li>
                ))
            }
        </ul>
    </section>
)

const mapStateToProps = state =>({
    persons : state.persons
})

const mapDispatchToProps = dispatch =>({
    quitarfavoritos(favorito) {
        dispatch({
            type:"QUITAR_FAVORITOS",
            favorito
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Favoritos)