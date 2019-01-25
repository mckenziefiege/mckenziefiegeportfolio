import React, { Component } from 'react'
import SimpleHeader from './SimpleHeader.js'
import SocialMediaLinks from './SocialMediaLinks.js'
import photo1 from '../img/165271D3-A606-4FB8-9309-C2D46ECAA181.JPG'

class Contact extends Component {

  componentDidMount() {
   window.scrollTo(0, 0);
 }

  render(){
    return (
      <div className="contact">
        <SimpleHeader />
          <div className="contact__information">
          <h2 className="h2-headers">Get in touch</h2>
            <div>
              <SocialMediaLinks />
            </div>
              <p>mckenziefiege@gmail.com</p>
              <p>(585) 490-9584</p>
          </div>
      </div>
    )
  }
}

export default Contact
