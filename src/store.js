import {createStore} from "redux"

const initalState = {
    favoritos: [],
    persons: []
};

const reducerFavoritos = (state = initalState, action) => {

    if(action.type == "AGREGAR_FAVORITO") {
        console.log(action.personaje);
        
        return{
            ...state,
            favoritos: state.favoritos.concat(action.personaje)
            
        }
    }

    if(action.type == "QUITAR_FAVORITOS") { 
        return{
            ...state,
            favoritos: state.favoritos.filter(j => j.id !== action.favorito.id),
        }
    }

    
    
    return state;
}

export default createStore(reducerFavoritos)