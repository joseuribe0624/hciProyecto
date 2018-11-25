import React, { Component } from 'react';
import './Subjects.css';
import user from "./assets/user.png";
import notification from "./assets/notification.png"
import * as firebase from 'firebase';

class subjects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "name":"John", 
      "code":666666, 
      "carrer":"ing de sistemas", 
      "prom":4.1, 
      "credits":32, 
      "location":4,
      "subjects":[
        {
          "subject": "Calculo multivariable",
          "profesor": "Leonhard Paul",
          "n_credits": 3
        },
        { 
          "subject": "Humanidades 2",
          "profesor": "Descartes",
          "n_credits": 3

        },
        {
          "subject": "Espiritu emprendedor",
          "profesor": "Richard Brandson",
          "n_credits": 2
        }
      ]
    }

   // componentDidMount(){
   //   const rootRef = firebase.database().ref().child('react');
   // }
  }
  render() {
    return (
    <div >
      <nav className="navbar navbar-light backNav" >
        <div className="container">
          <h1 className="title">
            Memo
          </h1>
          <div>
            <img src={notification} 
              width="35" height="35"  className="d-inline-block align-top " alt="" />
            <img src={user} 
              width="40" height="40"  className="d-inline-block align-top " alt="" />
          </div>
        </div>
      </nav>
      <div className="container">
        <a href="/">
          <h2>Inicio</h2>
        </a>
        <div className="row">
          <div className="col col-lg-6">
            <div className="card text-white mb-4 principalcard" >
              <div className="card-body info">
                <div className="row">
                  <div className="col-lg-6">
                    <p className="card-text">{ this.state.name }</p>
                    <p className="card-text">Codigo: {this.state.code}</p>
                    <p className="card-text">Carrera: {this.state.carrer}</p>
                  </div>
                  <div className="col-lg-6">
                    <p className="card-text">Promedio acumulado: {this.state.prom}</p>
                    <p className="card-text">Creditos aprobados: {this.state.credits}</p>
                    <p className="card-text">Ubicacion semestral: {this.state.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          { this.state.subjects.map(item => 
            <div className="col-lg-3">
              <div className="card text-white mb-3 cards" >
                <div className="card-body">
                  <div>
                    <p className="card-text tag">{ item.subject }</p>
                    <p className="card-text tag">Profesor</p>
                    <p className="card-text tag">{item.profesor}</p>
                    <p className="card-text tag">{item.n_credits} Creditos</p>
                  </div>
              </div>
              </div>
            </div>

          )

          }
        </div>
      </div>
    </div>
    );
  }
}

export default subjects;
