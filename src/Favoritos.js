import React from "react"
import { connect } from 'react-redux';
import './css/bootstrap.min.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';



const Favoritos = ({favoritos, quitarfavoritos}) => (
    
    <section>
        <div className="favorito" id="collap">
            {
                favoritos.map(j => (
                    <div className="row">
                        <div className="col-md-12">
                            <img src={j.image} alt={j.name}/> <label>{j.name}</label> 
                            <button className="closeFav" onClick={() => quitarfavoritos(j)}>
                                <FontAwesomeIcon icon={faTrashAlt} className="link" color="White" />    
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state =>({
    favoritos : state.favoritos
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