import React from 'react'
import { images, data } from '../../constants'
import './SpecialMenu.css'
import { SubHeading } from '../../components'

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu Thats Fit Your Palatte" />
      <h1 className="headtext__cormorant">Todays Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_ wine flex__center">
        <p className="app__specialMenu_heading">Wine & Beer</p>
        <div className="app__specialMenu_items">
          {data.wines.map((wine, index) => (
            <p>{wine.title}</p>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_heading">Wine & Beer</p>
        <div className="app__specialMenu_items">
          {data.cocktails.map((cocktail, index) => (
            <p>{cocktail.title}</p>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
)

export default SpecialMenu