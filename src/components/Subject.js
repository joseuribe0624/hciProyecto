import React, { Component } from 'react'
import Navbar from './Navbar'
import './Subject.css'



export default class Subject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nombre: 'Calculo Multivariable',
      creditos: 3,
      acumulado: 2.0,
      numero_faltas: 0.12,
      porcentaje: 0.4,
      profesor: 'Leonhard Paul Euler',
      profesor_email: 'paul@javerianacali.edu.co',
      profesor_oficina: 'DCN 2.4',
      notas: [
        {
          id: 1,
          objeto: 'Parcial I',
          porcentaje: 0.20,
          nota: 5.0,
          corte: 'I'
        },
        {
          id: 2,
          objeto: 'Parcial II',
          porcentaje: 0.20,
          nota: 5.0,
          corte: 'II'
        },
        {
          id: 3,
          objeto: 'Parcial III',
          porcentaje: 0.25,
          nota: null,
          corte: 'II'
        },
      ],
      horario: [
        {
          inicio: 11,
          fin: 13,
          salon: 'Lagos 2.3',
          dia: 'Martes'
        },
      ]
    }
  }

  render = () => {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="card card-light col-6">
              <div className="row">
                <div className="col col-6">
                  <p>{this.state.nombre}</p>
                  <p>Nota acumulada: {this.state.acumulado}</p>
                  <p>Porcentaje: {this.state.porcentaje}</p>
                </div>
                <div className="col col-6">
                  <p>Número de creditos: {this.state.creditos}</p>
                  <p>Número de faltas: {this.state.numero_faltas}</p>
                </div>
              </div>
            </div>
            <div className="card col">
              <div className="row">
                <div className="col">
                  <p>Profesor: {this.state.profesor}</p>
                  <p>Correo: {this.state.profesor_email}</p>
                  <p>Oficina: {this.state.profesor_oficina}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card col">
              <div className="row">
                <div className="col">
                  <h5>Concepto</h5>
                </div>
                <div className="col">
                  <h5>Nota</h5>
                </div>
                <div className="col">
                  <h5>Porcentaje</h5>
                </div>
                <div className="col">
                  <h5>Corte</h5>
                </div>
              </div>
              { this.state.notas.map((item) =>
                  <div key={item.id} className="row append">
                    <div className="col">{item.objeto}</div>
                    <div className="col">{item.nota ? item.nota : 'Faltante'}</div>
                    <div className="col">{item.porcentaje*100}%</div>
                    <div className="col">{item.corte}</div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
