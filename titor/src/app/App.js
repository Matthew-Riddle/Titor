import React, { Component } from 'react'
import MainContainer from '../components/MainContainer'
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import UserProfile from '../routes/UserProfile'
import Login from '../routes/Login'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isUserAuthenticated: true
    }
  }

  render() {
    return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={
            () => {
              return(
                this.state.isUserAuthenticated ?
                <Redirect to="/profile" /> :
                <Redirect to="/login" />
              )
            }
          }>
            
          </Route>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={UserProfile}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}
}

export default App;
