import React from 'react';
import { hot } from "react-hot-loader";
import NavBar from './components/NavBar';
// import './scss/index.scss'

function App() {
    return (
    <div className="App">
      <NavBar />
      <Home />

    </div>
    )
  }

export default hot(module)(App);
