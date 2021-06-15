import React from 'react';
import axios from 'axios';
import './css/style.css';
import {Button, Modal, ModalBody,ModalHeader,ModalFooter, FormGroup, Input, Label, Col, Container, Row, Form, Alert} from 'reactstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Registro extends React.Component {

    state = {
        id : '1',
        name : '',
        dateOfBirth : new Date(),
        eyeColour : '',
        hairColour : '',
        gender : '',
        position : '',
        msn : '',
        showMsn : 'none',
        typeMsn : 'alert-danger'
    }

    handleChange = event => {
        let name = document.getElementById('name').value;
        //let dateOfBirth = document.getElementById('dateOfBirth').value;
        let eyeColour = document.getElementById('eyeColour').value;
        let hairColour = document.getElementById('hairColour').value;
        let radioGender = document.getElementsByName("gender");
        let gender = '';
        for (var i = 0; i<radioGender.length; i++) {
            if (radioGender[i].checked == true) {
                gender = radioGender[i].value;
            }
        }

        let radioPosition = document.getElementsByName("position");
        let position = '';
        for (var i = 0; i<radioPosition.length; i++) {
            if (radioPosition[i].checked == true) {
                position = radioPosition[i].value;
            }
        }

        this.setState({ 
            name: name,
            //dateOfBirth: dateOfBirth,
            eyeColour: eyeColour,
            hairColour:hairColour,
            gender: gender,
            position: position
        });
    }

    setStudiante =() => {
        let url = '';    
        var hogwartsStudent = '';
        var hogwartsStaff = ''


        if(this.state.position == 1){
            hogwartsStudent = true;
            hogwartsStaff = false;
            url = "http://localhost:4000/students";
        } else {
            hogwartsStudent = false;
            hogwartsStaff = true;
            url = "http://localhost:4001/staff";
        }
            

        this.setState({ 
            typeMsn : 'alert-danger'         
        })    
                

        if(this.state.name == ''){
            this.setState({ 
                msn : 'Agrega el nombre del personaje',
                showMsn : 'block'                
            })
            return;
        } else {
            this.setState({ 
                msn : '',
                showMsn : 'none'                
            })
        }

        if(this.state.dateOfBirth == ''){
            this.setState({ 
                msn : 'Agrega el cumpleaños del personaje',
                showMsn : 'block'                
            })
            return;
        } else {
            this.setState({ 
                msn : '',
                showMsn : 'none'                
            })
        }

        if(this.state.eyeColour == ''){
            this.setState({ 
                msn : 'Agrega el color de ojos del personaje',
                showMsn : 'block'
            })
            return;
        } else {
            this.setState({ 
                msn : '',
                showMsn : 'none'
            })
        }

        if(this.state.hairColour == ''){
            this.setState({ 
                msn : 'Agrega el color de pelo del personaje',
                showMsn : 'block'
            })
            return;
        } else {
            this.setState({ 
                msn : '',
                showMsn : 'none'
            })
        }

        if(this.state.gender == ''){
            this.setState({ 
                msn : 'Agrega el genero del personaje',
                showMsn : 'block'
            })
            return;
        } else {
            this.setState({ 
                msn : '',
                showMsn : 'none'
            })
        }

        if(this.state.position == ''){
            this.setState({ 
                msn : 'Agrega la posición del personaje',
                showMsn : 'block'
            })
            return;
        } else {
            this.setState({ 
                msn : '',
                showMsn : 'none'
            })
        }

        let dateOfBirth = document.getElementById('dateOfBirth').value;

        axios.post(url, {
            name: this.state.name,
            dateOfBirth : dateOfBirth,
            eyeColour : this.state.eyeColour,
            hairColour : this.state.hairColour,
            gender : this.state.gender,
            position : this.state.position,
            hogwartsStudent : hogwartsStudent,
            hogwartsStaff : hogwartsStaff,
            alive: true,
            image : "https://pbs.twimg.com/profile_images/1378007131027251209/qY7wH_2W_400x400.jpg"
        }).then(res => {
            //console.info(res);
            //console.info(res.data);
            if(res) {
                if(this.state.position == 1){
                    this.props.filtroStudent();
                } else {
                    this.props.filtroStaff();
                }
                
                this.setState({ 
                    typeMsn : 'alert-success',      
                    msn : 'Los datos se guardaron con éxito',
                    showMsn : 'block'
                })    

                setTimeout(() => {
                    this.props.abriModal();
                }, 3000);
            }
        }).catch(
            function (error) {
                this.setState({ 
                    typeMsn : 'alert-danger',      
                    msn : 'Hubo un error al guardar',
                    showMsn : 'block'
                })    
                console.log('Show error notification!')
                return Promise.reject(error)
            }
        )
    }

    onChangeFecha = dateOfBirth => {
        var d = new Date(dateOfBirth);
        var n = d.getDay();
        console.log(n)

        this.setState({ 
            dateOfBirth: dateOfBirth
        });
    }

    render() {
        return (
            <div>
                <Button color="success" className="hide" >
                    Launch demo modal
                </Button>

                <Modal isOpen={this.props.abierto} size="lg">
                    <ModalHeader closeButton>
                        Agregar un personaje
                    </ModalHeader>    
                    <ModalBody>
                        <FormGroup>
                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <Label>Nombre</Label>
                                        <Input type="text" className="form-control" id="name" onChange={this.handleChange}></Input>        
                                    </Col>
                                    <Col md={6}>
                                        <Label className="col-md-12">Cumpleaños</Label>
                                        <DatePicker selected={this.state.dateOfBirth} className="form-control" id="dateOfBirth" onChange={this.onChangeFecha} dateFormat="d-M-yyyy"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Label>Color de ojos</Label>
                                        <Input type="text" className="form-control" id="eyeColour" onChange={this.handleChange}></Input>        
                                    </Col>
                                    <Col md={6}>
                                        <Label>Color de pelo</Label>
                                        <Input type="text" className="form-control" id="hairColour" onChange={this.handleChange}></Input>        
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={6} lg={6}>
                                        <Label className="form-group labelRadio">Genero</Label>
                                        <Form className="form-inline">
                                            <Input type="radio" value="female" id="gender1" name="gender" onChange={this.handleChange}></Input> <Label for="gender1"className="genero">Mujer</Label>
                                            <Input type="radio" value="male" id="gender2" name="gender" onChange={this.handleChange}></Input> <Label for="gender2" className="genero">Hombre</Label>
                                        </Form>
                                    </Col>
                                    <Col md={6} lg={6}>
                                        <Label className="form-group labelRadio">Posicion</Label>
                                        <Form className="form-inline">
                                            <Input type="radio" value="1" id="position1" name="position" onChange={this.handleChange}></Input> <Label for="position1" className="genero">Estudiante</Label>
                                            <Input type="radio" value="2" id="position2" name="position" onChange={this.handleChange}></Input> <Label for="position2" className="genero">Staff</Label>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={12} lg={12}>
                                        <div className={"alert "+this.state.typeMsn} style={{display:this.state.showMsn}}>
                                            {this.state.msn}
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter className="text-center">
                        <Button variant="secondary" onClick={this.props.abriModal}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={this.setStudiante}>
                            Guardar
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Registro;
