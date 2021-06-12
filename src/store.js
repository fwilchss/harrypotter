import {createStore} from "redux"

const initalState = {
    favoritos: [],
    persons: []
};

const reducerFavoritos = (state = initalState, action) => {

    if(action.type == "AGREGAR_FAVORITO") {
        return{
            ...state,
            favoritos: state.favoritos.concat(action.favorito)
        }
    }

    if(action.type == "QUITAR_FAVORITOS") { 
        return{
            ...state,
            favoritos: state.favoritos.filter(j => j.id !== action.favorito.id)
        }
    }

    console.log(action);
    return state;
}

export default createStore(reducerFavoritos)