import React, { Component } from 'react'
import SimpleHeader from './SimpleHeader.js'
import Projects from './Projects.js'

class AlternateProjects extends Component {

  componentDidMount() {
   window.scrollTo(0, 0);
 }

  render(){
    return (
      <div>
        <SimpleHeader />
        <Projects />
      </div>
    )
  }
}

export default AlternateProjects
