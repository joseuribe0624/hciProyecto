import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import Login from './components/Login';
import Subjects from './components/Subjects';
import * as firebase from 'firebase';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={({history}) => <Login history={history}/>
              }></Route>
             <Route exact path="/subjects" render={({history}) => <Subjects history={history}/>
              }></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
