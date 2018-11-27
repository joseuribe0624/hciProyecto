import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setFetching } from './../actions/auth'
import Navbar from './Navbar'
import Footer from './Footer'
import { db } from './../config/Firebase'
import LoadingSpinner from './LoadingSpinner'
import './Subjects.css'



class Subjects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "fetch": true,
      "name": "",
      "code": null,
      "carrer": "",
      "prom": null,
      "credits": null,
      "location": null,
      "subjects":[]
    }

    props.setFetching(true)
    let query = this.props.user.email.replace(/@(.+)/, "")
    db.ref(`/usuarios/${query}`).once('value').then((snapshot) =>{
      if (snapshot.val()) {
        let user = {
          "name": snapshot.val().name,
          "code": snapshot.val().code,
          "carrer": snapshot.val().carrera,
          "prom": snapshot.val().promedio,
          "credits": snapshot.val().creditos,
          "location": snapshot.val().semestre,
        }
        this.setState(user)
        for (let item in snapshot.val().cursos) {
          let query = snapshot.val().cursos[item]
          db.ref(`/materias/${query}`).once('value').then((res) =>{
            let temp = {
              "id": query,
              "profesor": res.val().profesor,
              "n_credits": res.val().creditos,
              "subject": res.val().nombre
            }
            this.setState({
              subjects: [...this.state.subjects, temp]
            })
          })
        }
        this.props.setFetching(false)
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.props.isFecthing &&
          <LoadingSpinner />
        }
        { !this.props.isFecthing &&
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

              { this.state.subjects.map(item => {
                  return (
                    <div key={ item.id } className="col-lg-3">
                      <Link to={`/inicio/${item.id}`}>
                        <div className="card text-white mb-3 cards" >
                          <div className="card-body">
                            <div>
                              <p className="card-text tag">{ item.subject }</p>
                              <p className="card-text tag">Profesor: {item.profesor}</p>
                              
                              <p className="card-text tag">{item.n_credits} Creditos</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isFecthing: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFetching: (val) => dispatch(setFetching(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subjects)
