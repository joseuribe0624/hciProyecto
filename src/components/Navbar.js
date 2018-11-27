import React, { Component } from 'react'
import { connect } from 'react-redux'
import user from "./assets/user.png"
import { auth } from './../config/Firebase.js'
import { withRouter } from 'react-router-dom'
import { setAuthentication, setUser } from './../actions/auth'
import './Navbar.css'



class Navbar extends Component {
  logout = () => {
    auth.signOut()
    this.props.setAuthentication(false)
    this.props.setUser({})
    this.props.history.push("/ingresar")
  }

  render = () => {
    return (
      <div>
        <nav className="navbar navbar-light backNav" >
          <a className="title" href={"/"}>
            Memo
          </a>
          <form className="form-inline">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <img src={user} 
                width="40" height="40" className="d-inline-block align-top " alt="" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <p className="dropdown-item" href="#">{this.props.email}</p>
              <div class="dropdown-divider"></div>
              <button onClick={this.logout} href="/" className="dropdown-item">Cerrar sesión</button>
            </div>
          </form>
        </nav>
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    email: state.user.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthentication: val => dispatch(setAuthentication(val)),
    setUser: user => dispatch(setUser(user))
  }
}

const Navbar_ = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default withRouter(Navbar_)
