import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EventPlannerPhoto1 from '../img/Screen Shot 2019-01-25 at 12.02.44 PM.png'

class Projects extends Component {

  render() {
    return (
      <div id="projects" className="projects">
        <h2 className="h2-headers">Projects</h2>


          <div className="row">
            <div className="col-1-of-2">
              <div>
                <p className="project-title">Plant Diary</p>
                  <Link to="/plant-diary">
                    <img className="project-image" alt="Plant Diary" src="https://user-images.githubusercontent.com/38592156/49955133-1db73a00-fed0-11e8-94e8-0f9b46ac0451.png" height="300px"/>
                  </Link>
                </div>
              </div>

              <div className="col-1-of-2">
              <div>
                <p className="project-title">Turbo Typing</p>
                  <Link to="/turbo-typing">
                    <img className="project-image" alt="Turbo Typing" src="https://user-images.githubusercontent.com/38592156/49956937-72f54a80-fed4-11e8-8e18-efea50917fdc.png" height="300px"/>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-1-of-2">
              <div>
                <p className="project-title">Novel Finds</p>
                  <Link to="/novel-finds">
                    <img className="project-image" alt="Novel Finds" src="https://user-images.githubusercontent.com/38592156/52527615-b6ccbc00-2c99-11e9-9a35-ea3112946b60.png" height="300px"/>
                  </Link>
              </div>
              </div>
              <div className="col-1-of-2">
              <div>
                <p className="project-title">Event Planner</p>
                  <Link to="/event-planner">
                    <img className="project-image" alt="Event Planner" src={EventPlannerPhoto1} height="300px"/>
                  </Link>
              </div>
              </div>
            </div>


      </div>
    )
  }
}

export default Projects
