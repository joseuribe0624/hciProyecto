import React, { Component } from 'react';
import logo from './assets/logoJaveriana.jpg';
import './Login.css';
import Background from './assets/javeriana.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + Background + ")"
};

class App extends Component {
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
                        <img src={logo} className="image"/>
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
                      <form >
                        <input className="input1" type="text" name="user" placeholder="Correo Institucional"/>
                        <input className="input2" type="password" name="password" placeholder="Contraseña"/>
                      <div className="buttonContainer">
                        <button  type="button" className="boton">Ingresar</button>
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
export default App;
