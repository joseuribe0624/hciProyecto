import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyB2rx2A6UpDDoLLlnYtyq80hMHIXQcAASM",
    authDomain: "memo-8a214.firebaseapp.com",
    databaseURL: "https://memo-8a214.firebaseio.com",
    projectId: "memo-8a214",
    storageBucket: "",
    messagingSenderId: "673864309378"
  };
  firebase.initializeApp(config);


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
