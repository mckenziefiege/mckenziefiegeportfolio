import React, { Component } from 'react';
import FullSizeRender from '../img/FullSizeRender.jpg'
import headShot from '../img/headshot.jpg'
import Instagram from '../img/iconfinder_instagram_3999037.png'
import LinkedIn from '../img/iconfinder_linkedin_3999038.png'

class AboutMe extends Component {

  render() {
    return (
      <div className="about-me-box">
        <h1 className="name-header">
          <span className="name-header-main">McKenzie Fiege</span>
          <span className="name-header-sub">Full Stack Web Developer</span>
        </h1>

        <div  className="image-box">
          <img src={headShot} alt="head shot" className="head-shot" height="400px"/>
        </div>

        <div>
          <img src={Instagram} alt="Instagram" height="50px"/>
          <img src={LinkedIn} alt="LinkedIn"height="50px"/>
        </div>

        <div className="bio">
          Hello! My name is McKenzie Fiege and I am a Full Stack Web Developer. I have experience with JavaScript, Ruby, Ruby on Rails, CSS, React and Redux. I love creating sleek and beautiful user interfaces. When i'm not coding, I enjoy taking photos, tending to my many plants and petting dogs.
        </div>
      </div>
    )
  }
}

export default AboutMe;
