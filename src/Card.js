import logo from './img/logo.png';
import React from 'react';
import axios from 'axios';
import './css/style.css';
//import 'bootstrap/dist/css/bootstrap.css';
import './css/bootstrap.min.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus, faBookmark as faBookmarkS, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faBookmark as faBookmarkR} from '@fortawesome/free-regular-svg-icons';
import Registro from './Registro';
import { connect } from 'react-redux';
import Favoritos from './Favoritos';


class Card extends React.Component {

    state = {
        persons: [],
        abierto : false,
        iconF: faBookmarkR
    }

    componentDidMount() {
        axios.get('http://localhost:4000/students')
        .then(res => {
            const persons = res.data;
            this.setState({ persons});
        })
    }

    filtroStudent = () => {
        axios.get('http://localhost:4000/students')
            .then(res => {
            const persons = res.data;
            this.setState({ persons});
        })
    }

    filtroStaff = () => {
        axios.get('http://localhost:4001/staff')
        .then(res => {
            const persons = res.data;
            this.setState({ persons});
        })
    }

    filtroFinados = () => {
        this.setState({ 
            persons : [] 
        });

        axios.get('http://localhost:4000/students?alive=false')
            .then(res => {
            const persons = res.data;
            this.setState({ persons});
            axios.get('http://localhost:4001/staff?alive=false')
                .then(res => {
                const staff = res.data;
                const pos = 2;
                this.setState({ 
                    persons : this.state.persons.concat(staff)
                });
            })
        })

        

        
    }

    abriModal = () => {
        this.setState({abierto : !this.state.abierto});
    }

    mostrarFavoritos = () => {
        if(document.getElementById('collap').style.display == 'none')
            document.getElementById('collap').style.display = 'block';
        else
            document.getElementById('collap').style.display = 'none';
    }

    render() {
        return (
            <div className="App">
                <Registro abierto={this.state.abierto} abriModal={this.abriModal} filtroStaff={this.filtroStaff} filtroStudent={this.filtroStudent}></Registro>
                <div className="container favoritos">
                    <div className="opciones">
                        <div className="btnAgregar" onClick = {this.abriModal}>
                            Agregar <FontAwesomeIcon icon = {faUserPlus} />
                        </div>
                        <div className="btnFavoritos" onClick={() => this.mostrarFavoritos()}>
                            Favoritos  <FontAwesomeIcon icon={faBookmarkS} />
                        </div>
                    </div>
                    <Favoritos />
                </div>
                
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={logo} className="logo" />
                        </div>
                    </div>
                    <div className="row botones">
                        <div className="col-md-12 text-center">
                            <h1>
                                Selecciona tu filtro
                            </h1>
                        </div>
                    </div>
                    <div className="row botones">
                        <div className="col-md-4 text-center">
                            <button className="filter" id="estudiantes" onClick={this.filtroStudent}>
                                Estudiantes
                            </button>
                        </div>
                        <div className="col-md-4 text-center">
                            <button className="filter" id="staff" onClick={this.filtroStaff}>
                                Staff
                            </button>
                        </div>
                        <div className="col-md-4 text-center">
                            <button className="filter" id="staff" onClick={this.filtroFinados}>
                                Finados
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.persons.map(
                                (person) => {
                                let icon = this.state.iconF;
                                
                                return(
                                    <div className="col-md-6 form-group">
                                        <div className={"ficha "+person.house} >
                                            <div className="avatar">
                                                <div className="img-avatar" style={{background: 'url('+person.image+') center 0%'}}></div>
                                            </div>
                                            <div className="description">
                                                <div className="status">
                                                    {(person.hogwartsStudent?'estudiante':'staff')+" / "+(person.alive ?'vivo':'finado')}
                                                    <div className="favoritos">
                                                        <FontAwesomeIcon icon={icon}  className="link" onClick={() => this.props.agregarFavorito(person)}/>
                                                    </div>
                                                </div>
                                                <div className="nombre">
                                                    {person.name}
                                                </div>
                                                <div className="caracteristicas">
                                                    <label>
                                                        <strong>Cumpleaños:</strong> <span className="lab">{person.dateOfBirth}</span>
                                                    </label>
                                                    <label>
                                                        <strong>Genero: </strong> <span className="lab">{person.gender}</span>
                                                    </label>
                                                    <label>
                                                        <strong> Color de ojos:</strong> <span className="lab">{person.eyeColour}</span>
                                                    </label>
                                                    <label>
                                                        <strong>Color de pelo:</strong> <span className="lab">{person.hairColour}</span>  
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );  
    }
}

const mapStateToProps = state =>({
    persons : state.persons
})

const mapDispatchToProps = dispatch =>({
    agregarFavorito(personaje){
        dispatch({
            type:"AGREGAR_FAVORITO",
            personaje
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)
//export default App;