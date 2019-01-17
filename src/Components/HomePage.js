import React, { Component } from 'react'
import AboutMe from './AboutMe.js'
import Skills from './Skills.js'
import Projects from './Projects.js'

class HomePage extends Component {

  render(){
    return (
      <div>
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    )
  }
}

export default HomePage
