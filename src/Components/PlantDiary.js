import React, { Component } from 'react'
import SimpleHeader from './SimpleHeader.js'

class PlantDiary extends Component {

  componentDidMount() {
   window.scrollTo(0, 0);
 }

  render(){
    return (
      <div>
      <SimpleHeader />
      <div className="project-page">
        <h2 className="h2-headers">Plant Diary</h2>

          <div className="link-list">
            <a target="_blank" className="link-list__link" href="https://github.com/mckenziefiege/plant_diary">GitHub</a>
            <a target="_blank" className="link-list__link" href="https://www.youtube.com/watch?v=3fGJ52SJP-4&feature=youtu.be">Video Demo</a>
          </div>

          <div>
          <img className="project-page__main-photo" src="https://user-images.githubusercontent.com/38592156/49955133-1db73a00-fed0-11e8-94e8-0f9b46ac0451.png"/>
          </div>

          <div className="project-page__description">
            <p>
              Plant Diary is made for plant lovers that need a simple solution for keeping track of their plants.
              Users create an account with a username and password in order to being tracking plants. Features include, to do list, comment section for each plant to document the life of your plant, deleting and updating plant information, and a search bar to search through your plants by species.
              I was inspired to create this app since I am a big plant lover and needed an easier way to document information related to each of my houseplants.
            </p>
          </div>

          <div className="project-page__tech-stack">
            <h3 className="project-page__tech-stack-header">Tech Stack</h3>
            <div className="skill-list">
              <p className="skill-list__skill">Ruby</p>&#124;
              <p className="skill-list__skill">Ruby on Rails</p>&#124;
              <p className="skill-list__skill">Bootstrap</p>&#124;
              <p className="skill-list__skill">CSS</p>
            </div>
          </div>
          <div className="project-page__image-container">
          <div>
            <img className="project-page__image" src="https://media.giphy.com/media/kERwcVBgLDiTeIdgUQ/giphy.gif" />
          </div>
          <div>
            <img className="project-page__image" src="https://media.giphy.com/media/6CBh8rzHDb0nrlSj4P/giphy.gif" />
          </div>
          </div>
          </div>
      </div>

    )
  }
}

export default PlantDiary
