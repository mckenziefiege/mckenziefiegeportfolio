import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {

  state = {
    options: false
  }

  changeMenu = (e)  => {
    console.log(e.target)
    if (e.target)
    this.setState({
      options: !this.state.options
    })
  }


  renderOptions = () => {
     return (<ul>
      <Link to="/"><li>Home</li></Link>
      <a href="#about-me"><li>About Me</li></a>
      <a href="#projects"><li>Projects</li></a>
      <Link to="about-me"><li>Resume</li></Link>
      <Link to="about-me"><li>Contact</li></Link>
    </ul>
    )
  }

  render() {
    return (
      <div onClick={this.changeMenu} className="nav">
      <div>
        <div className="nav__menu">
          Menu
          <div className="nav__options">
          {this.state.options ? this.renderOptions() : null}
          </div>
        </div>

        </div>
      </div>
    )
  }
}

export default Menu
