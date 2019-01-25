import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu.js'

class SimpleHeader extends Component {

  render(){
    return (
      <div class="simple-header">
        <div className="simple-header__text-box">
            <h1 className="simple-heading">
              <span className="simple-heading__main">McKenzie Fiege</span>
              <span className="simple-heading__sub">Full Stack Web Developer</span>
            </h1>
        </div>
        <Menu />
      </div>
    )
  }
}

export default SimpleHeader
