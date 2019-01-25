import React, { Component } from 'react'
import SimpleHeader from './SimpleHeader.js'
import EventPlannerPhoto1 from '../img/Screen Shot 2019-01-25 at 12.02.44 PM.png'
import EventPlannerPhoto2 from '../img/Screen Shot 2019-01-25 at 12.02.58 PM.png'
import EventPlannerPhoto3 from '../img/Screen Shot 2019-01-25 at 12.03.15 PM.png'
import EventPlannerPhoto4 from '../img/Screen Shot 2019-01-25 at 12.03.40 PM.png'

class EventPlanner extends Component {

  componentDidMount() {
   window.scrollTo(0, 0);
 }

  render(){
    return (
      <div>
        <SimpleHeader />
        <div className="project-page">
          <h2 className="h2-headers">Event Planner</h2>
            <div className="link-list">
              <a target="_blank" rel="noopener noreferrer"className="link-list__link" href="https://github.com/mckenziefiege/mod-4-final-project-frontend">GitHub</a>
            </div>
            <div>
              <img className="project-page__main-photo"  alt="event planner 4" src={EventPlannerPhoto1}/>
            </div>
            <div className="project-page__description">
              <p>
                Event Planner was created to make event planning simpler. Users are able to create an account or login to their personal profile.
                The home page shows the user's events they are attending. Individual event pages reveal event information, attendee list and a list of items attendees suggest.
              </p>
            </div>
            <div className="project-page__tech-stack">
              <h3 className="project-page__tech-stack-header">Tech Stack</h3>
              <div className="skill-list">
                <p className="skill-list__skill">React</p>&#124;
                <p className="skill-list__skill">Ruby on Rails</p>&#124;
                <p className="skill-list__skill">Semantic UI</p>&#124;
                <p className="skill-list__skill">CSS</p>
              </div>
            </div>
              <div className="project-page__image-container">
                <div>
                  <img className="project-page__image" alt="event planner 1" src={EventPlannerPhoto2}/>
                </div>
                <div>
                  <img className="project-page__image" alt="event planner 2" src={EventPlannerPhoto3}/>
                </div>
                <div>
                  <img className="project-page__image" alt="event planner 3" src={EventPlannerPhoto4}/>
                </div>
              </div>
            </div>
      </div>

    )
  }
}

export default EventPlanner
