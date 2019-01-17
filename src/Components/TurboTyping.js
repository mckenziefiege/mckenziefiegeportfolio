import React, { Component } from 'react'

class TurboTyping extends Component {

  render(){
    return (
      <div className="project-page">
        <h2 className="h2-headers">Turbo Typing</h2>
        <p className="project-description">
          Turbo typing is a speed typing test that measures speed and accuracy with three different levels of prompt difficulty.
          Users enter username and select difficult level for typing prompt
          Press space to move onto next word
          Words highlighted blue are the words the user is currently typing
          Words highlighted red are words the user types incorrectly
          Words that are gray are words the user has typed correctly
          When time is up, user is given their score (words typed correctly - words typed incorrectly)
        </p>
        <h3 className="project-h3-techstack">Tech Stack</h3>
        <div className="skill-list">
          <span>JavaScript | </span>
          <span> Ruby on Rails</span>
        </div>
        <a href="https://github.com/mckenziefiege/speed-typing_frontend">GitHub</a>
        <a href="https://www.youtube.com/watch?v=S0z5vgGLUnI">Video Demo</a>
        <img src="https://media.giphy.com/media/9xph4cY3RdsrTDzgbK/giphy.gif" />
        <img src="https://media.giphy.com/media/8mh9E4P4c4Oglyjpsa/giphy.gif" />
        <img src="https://media.giphy.com/media/6y1VGBsteUv9RGEvvw/giphy.gif" />
      </div>
    )
  }
}

export default TurboTyping
