import React, { Component } from 'react'
import SimpleHeader from './SimpleHeader.js'
import ResumeImage from '../img/Screen Shot 2019-01-25 at 1.29.32 PM.png'

class Resume extends Component {

  componentDidMount() {
   window.scrollTo(0, 0);
 }

  render() {
    return (
      <div>
        <SimpleHeader />
          <div className="resume">
            <img className="resume__image" alt="Resume" src={ResumeImage}/>
          </div>
      </div>
    )
  }
}

export default Resume
