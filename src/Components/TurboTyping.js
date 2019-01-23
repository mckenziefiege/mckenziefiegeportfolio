import React, { Component } from 'react'

class TurboTyping extends Component {

  render(){
    return (
      <div className="project-page">
        <h2 className="h2-headers">Turbo Typing</h2>
        <div className="project-links-div">
          <a className="project-links" href="https://github.com/mckenziefiege/speed-typing_frontend">GitHub</a>
          <a className="project-links" href="https://www.youtube.com/watch?v=S0z5vgGLUnI">Video Demo</a>
        </div>
        <p className="project-description">
          Turbo typing is a speed typing test that measures typing speed and accuracy with three different levels of prompt difficulty. Users enter their username and select a prompt difficulty level.
          To being the timer, you must click the input field and begin typing. Words highlighted blue represent words the user is currently typing, red words were tyyped incorrectly and gray are correctly typed words. Must press the space button to move onto next word.
          The backspace button is disabled so users can not go back and edit misspelled words. When time is up, a popup appears that reveals the user's score. This project was a fun way to experiment with pure JavaScript using a single page.
        </p>
        <h3 className="project-h3-techstack">Tech Stack</h3>

        <div className="skill-list">
          <span> JavaScript | </span>
          <span> Ruby on Rails</span>
        </div>

        <img src="https://media.giphy.com/media/9xph4cY3RdsrTDzgbK/giphy.gif" />
        <img src="https://media.giphy.com/media/8mh9E4P4c4Oglyjpsa/giphy.gif" />
        <img src="https://media.giphy.com/media/6y1VGBsteUv9RGEvvw/giphy.gif" />
      </div>
    )
  }
}

export default TurboTyping
