import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {

  state = {
    options: false
  }

  changeMenu = ()  => {
    this.setState({
      options: !this.state.options
    })
  }


  renderOptions = () => {
     return (<ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="about me"><li>About Me</li></Link>
      <Link to="about-me"><li>Projects</li></Link>
      <Link to="about-me"><li>Resume</li></Link>
      <Link to="about-me"><li>Contact</li></Link>
    </ul>
    )
  }

  render() {
    return (
      <div className="nav">
        <div onClick={this.changeMenu}className="nav__menu">
          Menu
        </div>
          <div className="nav__options">
          {this.state.options ? this.renderOptions() : null}
          </div>

      </div>
    )
  }
}

export default Menu
