import React, { Component } from 'react'

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
      <li>About Me</li>
      <li>Projects</li>
      <li>Resume</li>
      <li>Contact</li>
    </ul>
    )
  }

  render() {
    return (
      <div onClick={this.changeMenu}className="menu">
        Menu
        {this.state.options ? this.renderOptions() : null}
      </div>
    )
  }
}

export default Menu
