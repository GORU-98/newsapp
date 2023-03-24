import './App.css';
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Goru"/>
        <News pageSize="20" category="everything"/>
      </div>
    )
  }
}

export default App

