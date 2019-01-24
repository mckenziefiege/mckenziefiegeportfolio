import React, { Component } from 'react';
import headShot from '../img/headshot.jpg'
import Instagram from '../img/iconfinder_38-instagram_1161954.png'
import LinkedIn from '../img/iconfinder_linkedin_circle_black_107159.png'
import Medium from '../img/iconfinder_108-medium_710953.png'
import GitHub from '../img/iconfinder_github_circle_black_107161.png'

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
                When i'm not coding, I enjoy taking photos, hand lettering, traveling, tending to my house plants and petting dogs. Feel free to contact me :)
              </p>
              <div className="about-me__links">
                <a target="_blank" href="https://github.com/mckenziefiege"><img src={GitHub} alt="LinkedIn" className="media-icon"/></a>
                <a target="_blank" href="https://medium.com/@mckenziefiege"><img src={Medium} alt="Medium Blog" className="media-icon"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/mckenziefiege"><img src={LinkedIn} alt="GitHub" className="media-icon"/></a>
                <a target="_blank" href="https://www.instagram.com/mckenziefiege/"><img src={Instagram} alt="Instagram" className="media-icon"/></a>
              </div>
            </div>
          </div>

      </div>
    )
  }
}

export default AboutMe;
