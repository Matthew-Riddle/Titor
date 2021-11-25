import React, { createContext } from 'react'
import MainContainer from '../components/MainContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import UserProfile from '../routes/UserProfile'
import Login from '../routes/Login'

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
