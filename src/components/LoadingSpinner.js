import React from 'react'
import Loader from 'react-loader-spinner'

const LoadingSpinner = () => 
  <div
    style={{height: "300px"}}
    className="container d-flex justify-content-center align-items-center">
    <Loader
     type="Puff"
     color="#00BFFF"
     height="150"
     width="150"
    />
  </div>

export default LoadingSpinner
