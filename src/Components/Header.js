import React, { Component } from 'react'

class Header extends Component {

  render(){
    return (
      <div className="header">
        <div className="header__text-box">
            <h1 className="heading">
              <span className="heading__main">McKenzie Fiege</span>
              <span className="heading__sub">Full Stack Web Developer</span>
            </h1>
        </div>
      </div>
    )
  }
}

export default Header
