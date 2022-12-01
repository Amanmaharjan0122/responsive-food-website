import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1"> The Key To Find Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          The Crust Pizza & Bread brings the best of Italy to Kathmandu where
          wood-fired pizza, hand crafted pastas, classic cocktails and warm
          hospitality come together ...
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img"></img>
      </div>
    </div>
  )
}

export default Header
