import React, { Component } from 'react'

class NovelFinds extends Component {

  render(){
    return (
      <div className="project-page">
        <h2 className="h2-headers">Novel Finds</h2>
        <p className="project-description">
        Novel Finds is an app designed to keep track of what you're reading and to join book clubs in you're area.
        This app exists to give book lovers a place to keep track of what they've read or what they want to read. For those that want to join a book club to connect with other book lovers, users can create and join book clubs.
        Create an account/ Login with a username and password if an exisiting user
        Search for books using the Google Books API, add a book from search which will appear in "Want to read" section
        Each user has a "Read", "Currently Reading", and "Want to read" sections
        For each of the user's book, users can click image for more information, leave a review, favorite, and change its category
        Can filter books from A-Z, Z-A or by favorited books
        Users can create a new book club or search for book clubs using their zip code
        Can join a bookclub or leave a bookclub if already a member
        On a bookclub's page, there is an information snippet including attendees, address, time, decription and name of the host. Bookclub pages also include a discussion forum where users can post comments about the bookclub.
        Users have the ability to search for reviews by entering the title of a book
        </p>
        <h3 className="project-h3-techstack">Tech Stack</h3>
        <div className="skill-list">
          <span>React | </span>
          <span> Ruby on Rails | </span>
          <span> Redux | </span>
          <span> Google Books API</span>
        </div>
        <a href="https://github.com/mckenziefiege/book_club_frontend">GitHub</a>
        <a href="https://www.youtube.com/watch?v=7J5aMVx50gk&feature=youtu.be">Video Demo</a>
        <img src="https://media.giphy.com/media/2wV3AaFKqZ5C2n7xu8/giphy.gif" />
        <img src="https://media.giphy.com/media/i3CZmDePQ03VoNH7jm/giphy.gif" />
        <img src="https://media.giphy.com/media/1zgzGPOhQuMMQusV6N/giphy.gif" />
        <img src="https://media.giphy.com/media/Bp3cXxhnuVAf6pXioD/giphy.gif" />
      </div>
    )
  }
}

export default NovelFinds
