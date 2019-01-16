import React, { Component } from 'react';
import './App.css';
import AboutMe from './Components/AboutMe.js'
import Projects from './Components/Projects.js'

class App extends Component {
  render() {
    return (
      <div>
      <AboutMe />
      <Projects />
      </div>
    );
  }
}

export default App;
