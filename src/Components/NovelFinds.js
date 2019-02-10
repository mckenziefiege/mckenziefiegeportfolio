import React, { Component } from 'react'
import SimpleHeader from './SimpleHeader.js'

class NovelFinds extends Component {

  componentDidMount() {
   window.scrollTo(0, 0);
 }

  render(){
    return (
      <div>
      <SimpleHeader />
      <div className="project-page">
        <h2 className="h2-headers">Novel Finds</h2>

        <div className="link-list">
          <a target="_blank" rel="noopener noreferrer" className="link-list__link" href="https://github.com/mckenziefiege/book_club_frontend">GitHub</a>
          <a target="_blank" rel="noopener noreferrer" className="link-list__link" href="https://www.youtube.com/watch?v=wysrWkzBlaw&feature=youtu.be">Video Demo</a>
        </div>

        <div>
          <img className="project-page__main-photo" alt="Novel Finds 1" src="https://user-images.githubusercontent.com/38592156/52527615-b6ccbc00-2c99-11e9-9a35-ea3112946b60.png" />
        </div>

        <div className="project-page__description">
          <p className="project-description">
            Novel Finds is an app to keep track of what you're reading, what you've read and to join book clubs in you're area. Users can create an account or log in with their username and password,
            search for books using the Google Books API, leave reviews, favorite books, create a new book club or search for book clubs using their zip code. An individual Book club's page also includes a discussion forum where users can post comments.
            I was inspired to create this app since I always found it diffcult to remember books I've read or books I'd like to read. The book club feature allows book lovers to meet others in their town and discuss their favorite reads.
          </p>
        </div>

        <div className="project-page__tech-stack">
          <h3 className="project-page__tech-stack-header">Tech Stack</h3>
          <div className="skill-list">
            <p className="skill-list__skill">React</p>&#124;
            <p className="skill-list__skill">Ruby on Rails</p>&#124;
            <p className="skill-list__skill">Redux</p>&#124;
            <p className="skill-list__skill">Google Books API</p>
          </div>
        </div>

          <div lassName="project-page__image-container">
            <img className="project-page__image" alt="Novel Finds 2" src="https://media.giphy.com/media/bwL5qb8btR1MjHUPSr/giphy.gif" />
            <img className="project-page__image" alt="Novel Finds 3" src="https://media.giphy.com/media/1rQSyrMNFm6MCk87PZ/giphy.gif" />
            <img className="project-page__image" alt="Novel Finds 4" src="https://media.giphy.com/media/2fTYMHEGzo1IpYiP66/giphy.gif" />
            <img className="project-page__image" alt="Novel Finds 5" src="https://media.giphy.com/media/U7qAATHGpCBDvczzY9/giphy.gif" />
          </div>
        </div>
        </div>

    )
  }
}

export default NovelFinds
