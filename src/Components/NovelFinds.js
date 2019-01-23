import React, { Component } from 'react'

class NovelFinds extends Component {

  render(){
    return (
      <div className="project-page">
        <h2 className="h2-headers">Novel Finds</h2>
        <div className="project-links-div">
          <a className="project-links" href="https://github.com/mckenziefiege/book_club_frontend">GitHub</a>
          <a className="project-links" href="https://www.youtube.com/watch?v=7J5aMVx50gk&feature=youtu.be">Video Demo</a>
        </div>
        <p className="project-description">
          Novel Finds is an app to keep track of what you're reading, what you've read and to join book clubs in you're area. Users can create an account or log in with their username and password,
          search for books using the Google Books API, leave reviews, favorite books, create a new book club or search for book clubs using their zip code. An individual Book club's page also includes a discussion forum where users can post comments.
          I was inspired to create this app since I always found it diffcult to remember books I've read or books I'd like to read. The book club feature allows book lovers to meet others in their town and discuss their favorite reads.
        </p>
        <h3 className="project-h3-techstack">Tech Stack</h3>
        <div className="skill-list">
          <span> React | </span>
          <span> Ruby on Rails | </span>
          <span> Redux | </span>
          <span> Google Books API</span>
        </div>
        <div>
        <img src="https://media.giphy.com/media/2wV3AaFKqZ5C2n7xu8/giphy.gif" />
        <img src="https://media.giphy.com/media/i3CZmDePQ03VoNH7jm/giphy.gif" />
        <img src="https://media.giphy.com/media/1zgzGPOhQuMMQusV6N/giphy.gif" />
        <img src="https://media.giphy.com/media/Bp3cXxhnuVAf6pXioD/giphy.gif" />
        </div>
      </div>
    )
  }
}

export default NovelFinds
