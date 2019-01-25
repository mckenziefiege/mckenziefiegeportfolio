import React, { Component } from 'react'
import SimpleHeader from './SimpleHeader.js'

class TurboTyping extends Component {

  componentDidMount() {
   window.scrollTo(0, 0);
 }

  render(){
    return (
      <div>
      <SimpleHeader />
      <div className="project-page">
        <h2 className="h2-headers">Turbo Typing</h2>
        <div className="link-list">
          <a target="_blank" className="link-list__link" href="https://github.com/mckenziefiege/speed-typing_frontend">GitHub</a>
          <a target="_blank" className="link-list__link" href="https://www.youtube.com/watch?v=S0z5vgGLUnI">Video Demo</a>
        </div>

        <div>
          <img className="project-page__main-photo" src="https://user-images.githubusercontent.com/38592156/49956937-72f54a80-fed4-11e8-8e18-efea50917fdc.png"/>
        </div>


        <div className="project-page__description">
          <p>
            Turbo typing is a speed typing test that measures typing speed and accuracy with three different levels of prompt difficulty. Users enter their username and select a prompt difficulty level.
            To being the timer, you must click the input field and begin typing. Words highlighted blue represent words the user is currently typing, red words were tyyped incorrectly and gray are correctly typed words. Must press the space button to move onto next word.
            The backspace button is disabled so users can not go back and edit misspelled words. When time is up, a popup appears that reveals the user's score. This project was a fun way to experiment with pure JavaScript using a single page.
          </p>
        </div>

        <div className="project-page__tech-stack">
          <h3 className="project-page__tech-stack-header">Tech Stack</h3>
          <div className="skill-list">
            <p className="skill-list__skill">JavaScript</p>&#124;
            <p className="skill-list__skill">Ruby on Rails</p>
          </div>
        </div>

        <div className="project-page__image-container">
          <img className="project-page__image" src="https://media.giphy.com/media/9xph4cY3RdsrTDzgbK/giphy.gif" />
          <img className="project-page__image" src="https://media.giphy.com/media/8mh9E4P4c4Oglyjpsa/giphy.gif" />
          <img className="project-page__image" src="https://media.giphy.com/media/6y1VGBsteUv9RGEvvw/giphy.gif" />
        </div>
      </div>
      </div>
    )
  }
}

export default TurboTyping
