import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu.js'


class Header extends Component {

  render(){
    return (
      <div class="header">
        <div className="header__text-box">
            <h1 className="heading">
              <span className="heading__main">McKenzie Fiege</span>
              <span className="heading__sub">Full Stack Web Developer</span>
            </h1>
        </div>
        <Menu />
      </div>
    )
  }
}

export default Header
