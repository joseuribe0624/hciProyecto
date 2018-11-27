import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setFetching } from './../actions/auth'
import LoadingSpinner from './LoadingSpinner'
import { db } from './../config/Firebase'
import Navbar from './Navbar'
import Footer from './Footer'
import './Subject.css'



class Subject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nombre: '',
      creditos: null,
      acumulado: null,
      numero_faltas: null,
      porcentaje: null,
      profesor: '',
      profesor_email: '',
      profesor_oficina: '',
      notas: [],
      horario: []
    }
    
    props.setFetching(true)
    let query = props.match.params.id
    db.ref(`/materias/${query}`).once('value').then((snapshot) => {
      this.setState(snapshot.val())
      this.props.setFetching(false)
    })
  }

  render = () => {
    return (
      <div>
        <Navbar />
        { this.props.isFecthing &&
          <LoadingSpinner />
        }
        { !this.props.isFecthing &&
          <div className="container">
            <div className="row">
              <Link to="/inicio">
                <h2>Inicio</h2>
              </Link>
              <h2> / </h2>
              <Link to="#">
                <h2>{this.state.nombre}</h2>
              </Link>
            </div>
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
        }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFecthing: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFetching: (val) => dispatch(setFetching(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subject)
