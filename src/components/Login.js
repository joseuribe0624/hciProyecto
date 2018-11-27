import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login_schema } from './../config/Schemas'
import { setAuthentication, setUser, setFetching } from './../actions/auth'
import { auth } from './../config/Firebase.js'
import Loader from 'react-loader-spinner'
import logo from './assets/logoJaveriana.jpg'
import './Login.css'



class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    }
  }

  login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.props.setAuthentication(true)
        this.props.setUser({
          email: res.user.email,
          name: res.user.displayName,
          photo: res.user.photoURL
        })
        this.props.setFetching(false)
        return res
      })

  onSubmit = (e) => {
    e.preventDefault()
    login_schema.validate({email: this.state.email,
      password: this.state.password})
        .then(res => {
          this.props.setFetching(true)
          this.login(this.state.email, this.state.password).then((e)=>
            this.props.history.push('/inicio'))
            .catch(err => {
              console.log(err)
              switch (err.code) {
                case "auth/wrong-password":
                  this.setState({
                    errors: {
                      ...this.state.errors,
                      password: "La contraseña no es válida o el usuario no tiene una contraseña."
                    }
                  })
                  break
                case "auth/network-request-failed":
                  this.setState({
                    errors: {
                      ...this.state.errors,
                      password: "Se ha producido un error de red (como un tiempo de espera, una conexión interrumpida o un host inalcanzable)."
                    }
                  })
                  break
                default:
                  this.setState({
                    errors: {
                      ...this.state.errors,
                      password: "Error al tratar de acceder, contante al administrador."
                    }
                  })
                  break
              }
              this.props.setFetching(false)
            })
        })
        .catch(err => {
          this.setState({
            errors: {...this.state.errors, [err.path]: err.message}
          })
        })
  } 

  onHandle = (e) => {
    this.setState({
      errors: {...this.state.errors, [e.target.name]: ""}
    })
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
    <div className="back">
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
            <div className="col-6 box">
            <div className="row">
              <div className="col-md-2 "></div>
                <div className="col-md-8">
                  <div className="row top">
                    <div className="col-sm-5">
                        <img alt="Javeriana Cali" src={logo} className="image"/>
                    </div>
                    <div className="vl"></div>
                    <div className="col-sm">
                      <div className="container2">
                        <div className="row">
                          <h2 className="title">Memo</h2>
                        </div>
                        <div className="row">
                          <h6>Tus notas al instante</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm">
                      <form onSubmit={this.onSubmit}>
                        <input
                          onChange={this.onHandle}
                          className="input1"
                          type="text"
                          name="email"
                          placeholder="Correo Institucional"/>
                        { this.state.errors.email &&
                          <div className="invalid">
                            { this.state.errors.email }
                          </div>
                        }
                        <input
                          onChange={this.onHandle}
                          className="input2"
                          type="password"
                          name="password"
                          placeholder="Contraseña"/>
                        { this.state.errors.password &&
                          <div className="invalid">
                            { this.state.errors.password }
                          </div>
                        }
                        <div className="buttonContainer">
                          { !this.props.isFetching &&
                            <button type="submit" className="boton">Ingresar</button>
                          }
                          { this.props.isFetching &&
                            <div
                              style={{marginTop: "40px", marginBottom: "30px"}}
                            >
                              <Loader
                               type="ThreeDots"
                               color="#2C5697"
                               height="35"
                               width="83"
                              />
                            </div>
                          }
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div> 
          <div className="col-3"></div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthentication: val => dispatch(setAuthentication(val)),
    setUser: user => dispatch(setUser(user)),
    setFetching: val => dispatch(setFetching(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
