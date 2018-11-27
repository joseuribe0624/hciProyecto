import React from 'react'
import logo from './assets/logoJaveriana.jpg'
import './Footer.css'

const Footer = () => 
  <footer className="container footer">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-2 d-flex justify-content-center justify-content-lg-start">
        <img className="footer__brand" alt="Javeriana Cali" src={logo}/>
      </div>
      <div className="col-lg-4 d-flex flex-column align-items-center align-items-lg-start justify-content-center flex-lg-column justify-content-lg-between">
        <p className="info">Pontificia Universidad Javeriana de Cali calle 18 No 118-250  Cali, Colombia, Teléfono: (+57-2) 321-82-00/485-64-00 - Línea gratuita nacional 01-8000-180556 "Institución de Educación Superior sujeta a control y vigilancia por el Ministerio de Educación Nacional". Decreto 1075 de 2015 / Resolución 12220 de 2016</p>
        <p className="links">Aviso de privacidad - Política de tratamiento de datos</p>
      </div>
    </div>
  </footer>

export default Footer
