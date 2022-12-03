import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.css'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="chef's word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            A commis is a basic chef in larger kitchens who works under a chef
            head.
          </p>
        </div>
        <p className="p__opensans">
          a cook is 'someone who prepares and cooks food', while a chef is 'a
          skilled and trained cook who works in a hotel or restaurant'.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
)

export default Chef
