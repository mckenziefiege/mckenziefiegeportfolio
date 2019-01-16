import React, { Component } from 'react';
import headShot from '../img/headshot.jpg'
import Instagram from '../img/iconfinder_38-instagram_1161954.png'
import LinkedIn from '../img/iconfinder_linkedin_circle_black_107159.png'
import Medium from '../img/iconfinder_108-medium_710953.png'
import GitHub from '../img/iconfinder_github_circle_black_107161.png'

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
          <img src={Instagram} alt="Instagram" className="media-icon"/>
          <img src={LinkedIn} alt="LinkedIn" className="media-icon"/>
          <img src={Medium} alt="Medium Blog" className="media-icon"/>
          <img src={GitHub} alt="GitHub" className="media-icon"/>
        </div>

        <div className="bio">
          <span className="bio-span">
            Hello! My name is McKenzie Fiege and I am a Full Stack Web Developer. <br/>I have experience with JavaScript, Ruby, Ruby on Rails, CSS, React and Redux. <br/>
            I love creating sleek and beautiful user interfaces. <br/>
            When i'm not coding, I enjoy taking photos, tending to my many plants and petting dogs.
          </span>
        </div>

      </div>
    )
  }
}

export default AboutMe;
