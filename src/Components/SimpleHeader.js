import React, { Component } from 'react'

class SimpleHeader extends Component {

  render(){
    return (
      <div className="simple-header">
        <div className="simple-header__text-box">
            <h1 className="simple-heading">
              <span className="simple-heading__main">McKenzie Fiege</span>
              <span className="simple-heading__sub">Full Stack Web Developer</span>
            </h1>
        </div>
      </div>
    )
  }
}

export default SimpleHeader
