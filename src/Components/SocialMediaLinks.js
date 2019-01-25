import React, { Component } from 'react'
import Instagram from '../img/iconfinder_38-instagram_1161954.png'
import LinkedIn from '../img/iconfinder_linkedin_circle_black_107159.png'
import Medium from '../img/iconfinder_108-medium_710953.png'
import GitHub from '../img/iconfinder_github_circle_black_107161.png'

class SocialMediaLinks extends Component {

  render() {
    return (
      <div className="media">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mckenziefiege"><img src={GitHub} alt="LinkedIn" className="media-icon"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@mckenziefiege"><img src={Medium} alt="Medium Blog" className="media-icon"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mckenziefiege"><img src={LinkedIn} alt="GitHub" className="media-icon"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mckenziefiege/"><img src={Instagram} alt="Instagram" className="media-icon"/></a>
      </div>
    )
  }
}

export default SocialMediaLinks
