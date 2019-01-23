import React, { Component } from 'react'

class PlantDiary extends Component {

  render(){
    return (
      <div className="project-page">
        <h2 className="h2-headers">Plant Diary</h2>
        <div className="project-links-div">
          <a className="project-links" href="https://github.com/mckenziefiege/plant_diary">GitHub</a>
          <a className="project-links" href="https://www.youtube.com/watch?v=3fGJ52SJP-4&feature=youtu.be">Video Demo</a>
        </div>
        <p className="project-description">
          Plant Diary is made for plant lovers that need a simple solution for keeping track of their plants.
          Users create an account with a username and password in order to being tracking plants. Features include, to do list, comment section for each plant to document the life of your plant, deleting and updating plant information, and a search bar to search through your plants by species.
          I was inspired to create this app since I am a big plant lover and needed an easier way to document information related to each of my houseplants.
        </p>
        <h3 className="project-h3-techstack">Tech Stack</h3>

        <div className="skill-list">
          <span> Ruby | </span>
          <span> Ruby on Rails</span>
        </div>

        <img src="https://media.giphy.com/media/kERwcVBgLDiTeIdgUQ/giphy.gif" />
        <img src="https://media.giphy.com/media/6CBh8rzHDb0nrlSj4P/giphy.gif" />
      </div>
    )
  }
}

export default PlantDiary
