import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {

  state = {
    options: false
  }

  changeMenu = (e)  => {
    this.setState({
      options: !this.state.options
    })
  }


  renderOptions = () => {
     return (<ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about-me"><li>About Me</li></Link>
      <Link to="/projects"><li>Projects</li></Link>
      <Link to="/resume"><li>Resume</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
    </ul>
    )
  }

  render() {
    return (
      <div onClick={this.changeMenu} className="nav">
          <div className="nav__menu">
            Menu
            <div className="nav__options">
            {this.state.options ? this.renderOptions() : null}
            </div>
          </div>
      </div>
    )
  }
}

export default Menu
