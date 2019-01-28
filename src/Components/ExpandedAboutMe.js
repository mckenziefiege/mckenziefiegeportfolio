import React, { Component } from 'react'
import SimpleHeader from './SimpleHeader.js'
import aboutPhoto from '../img/82A15F04-A1E3-43C9-9FE6-16D3A7B03E84.JPG'

class ExpandedAboutMe extends Component {

  componentDidMount() {
   window.scrollTo(0, 0);
 }

  render(){
    return (
      <div className="expanded-about-me">
        <SimpleHeader />

        <div className="expanded-about-me__header"><h2 className="h2-headers">About Me</h2></div>

        <div className="row">

          <div className="col-1-of-2 expanded-about-me__left">
            <div>
              <img className="expanded-about-me__photo" src={aboutPhoto} alt="McKenzie"/>
            </div>
          </div>

          <div className="col-1-of-2 expanded-about-me__right">
            <p className="expanded-about-me__text">
              I became a developer because it is the passion I was always looking for throughout college. I graduated from SUNY College at Brockport in December 2017 with a degree in Psychology and a minor in Anthropology. Before and after graduating, I felt uninspired with my degree. I continued to work part-time while also looking for jobs related to my studies. Thankfully, I discovered programming from a friend who had completed a coding bootcamp. I had no experience with programming but I was so intrigued and decided to give it a try. Throughout my life I was always looking for different outlets to express my creativity. Whether it was through sculpture, photography or hand lettering, I always felt a deep sense of joy when I was able to see the finished product after putting in so much effort. While teaching myself the basics of Ruby, I realized how much fun I was having solving simple problems and debugging code. Crafting solutions to algorithms was a new creative outlet I had never experienced, but I was hooked. I was even excited to show  friends and family these new skills. This excitement and passion was something that I had not felt during college and I knew that I wanted to pursue this career change. I studied diligently and enthusiastically and I was eventually accepted into Flatiron School's 15-week, full time web development program in Brooklyn, NY. This life changing experience gave me the tools I needed in order to thrive as a developer. Attending a coding bootcamp was one of the best decisions I've made, and I am so excited to launch my new career as a web developer.
            </p>
          </div>

        </div>
      </div>
    )
  }
}

export default ExpandedAboutMe
