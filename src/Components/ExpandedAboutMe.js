import React, { Component } from 'react'
import SimpleHeader from './SimpleHeader.js'

class ExpandedAboutMe extends Component {

  componentDidMount() {
   window.scrollTo(0, 0);
 }

  render(){
    return (
      <div className="expande-about-me">
        <SimpleHeader />
        hi
      </div>
    )
  }
}

export default ExpandedAboutMe
