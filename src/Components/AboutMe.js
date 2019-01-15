import React, { Component } from 'react';
import FullSizeRender from '../img/FullSizeRender.jpg'

class AboutMe extends Component {

  render() {
    return (
      <div>
        <h1 className="name-header">
        <span className="name-header-main">McKenzie Fiege</span>
        <span className="name-header-sub">Full Stack Web Developer</span>
        </h1>
        <img src={FullSizeRender} alt="head shot" className="head-shot"/>
      </div>
    )
  }
}

export default AboutMe;
