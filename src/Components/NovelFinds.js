import React, { Component } from 'react'

class NovelFinds extends Component {

  render(){
    return (
      <div className="project-page">
        <h2 className="h2-headers">Novel Finds</h2>

        <div className="project-page__link-list">
          <a target="_blank" className="project-page__link" href="https://github.com/mckenziefiege/book_club_frontend">GitHub</a>
          <a target="_blank" className="project-page__link" href="https://www.youtube.com/watch?v=7J5aMVx50gk&feature=youtu.be">Video Demo</a>
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
            <p className="skill-list__skill">React</p>
            <p className="skill-list__skill">Ruby on Rails</p>
            <p className="skill-list__skill">Redux</p>
            <p className="skill-list__skill">Google Books API</p>
          </div>
        </div>

          <div lassName="project-page__image-container">
            <img className="project-page__image" src="https://media.giphy.com/media/2wV3AaFKqZ5C2n7xu8/giphy.gif" />
            <img className="project-page__image" src="https://media.giphy.com/media/i3CZmDePQ03VoNH7jm/giphy.gif" />
            <img className="project-page__image" src="https://media.giphy.com/media/1zgzGPOhQuMMQusV6N/giphy.gif" />
            <img className="project-page__image" src="https://media.giphy.com/media/Bp3cXxhnuVAf6pXioD/giphy.gif" />
          </div>
        </div>

    )
  }
}

export default NovelFinds
