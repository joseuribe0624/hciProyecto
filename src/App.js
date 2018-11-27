import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Switch } from 'react-router'
import Login from './components/Login'
import Subjects from './components/Subjects'
import Subject from './components/Subject'



const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/ingresar',
          state: { from: props.location }
        }} />
  )} />
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/ingresar"
              component={Login}
            ></Route>
            <PrivateRoute
              exact
              isAuthenticated={this.props.isAuthenticated}
              path="/inicio/:id"
              component={Subject} />
            <PrivateRoute
              exact
              isAuthenticated={this.props.isAuthenticated}
              path="/inicio"
              component={Subjects}
            />
            <Redirect from='*' to='/inicio' />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps)(App)
