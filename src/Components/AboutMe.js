import React, { Component } from 'react';
import headShot from '../img/headshot.jpg'
import SocialMediaLinks from './SocialMediaLinks.js'

class AboutMe extends Component {

  render() {
    return (
      <div id="about-me" className="about-me">
      <h2 className="header-secondary">Welcome!</h2>
        <div className="about-me__content row">
            <div  className="about-me__image col-1-of-2">
              <img src={headShot} alt="head shot" className="head-shot" height="400px"/>
            </div>
            <div className="about-me__bio col-1-of-2">
              <p className="about-me__bio-text">
                Hi, I'm McKenzie! I am a Full Stack Web Developer with a passion for creativity.
                My background in Psychology and Anthropology taught me to create apps that are intuitive and practical. I am captivated by striking and responsive web applications that are simultaneously beautiful and minimalistic. My goal is to incorporate this fascination into my own projects.
                When I'm not coding, I enjoy taking photos, hand lettering, traveling, tending to my house plants and petting dogs. Feel free to get in touch!
              </p>
            <SocialMediaLinks />
            </div>
          </div>
      </div>
    )
  }
}

export default AboutMe;
