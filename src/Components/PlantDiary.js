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
          Plant Diary is designed to keep track of your house plants. Users can create an account and submit information about each of their plants.
          This application is made for plant lovers who need an easier way of keeping track of the plants in their home.
          Create a new account/ login with username and password if an existing user
          Create, update and delete plants
          When creating a new plant, users can include information concerning its species, location in home, watering schedule, image, and nickname
          Create and delete diary entires about each plant
          To do list on user homepage allows users to keep track of plant related tasks and check off when completed
          Ruby on Rails using MVC pattern
          Bcrypt for authentication
        </p>
        <h3 className="project-h3-techstack">Tech Stack</h3>

        <div className="skill-list">
          <span>Ruby | </span>
          <span> Ruby on Rails</span>
        </div>

        <img src="https://media.giphy.com/media/kERwcVBgLDiTeIdgUQ/giphy.gif" />
        <img src="https://media.giphy.com/media/6CBh8rzHDb0nrlSj4P/giphy.gif" />
      </div>
    )
  }
}

export default PlantDiary
