import React from 'react'
import { Helmet } from 'react-helmet';
import './Shop.css'

import { ApparelsData } from '../data'

const Shop = () => {
  return (
    <div className='shop'>
      <div className="shop-banner">
        <div className="hero-content">
          <h1>Shop</h1>
          <p>Choose from a varierty of mockups</p>
        </div>
      </div>

      <div className='apparels'>
        <h2>Apparels</h2>
        <div className="apparels-grid">
          {ApparelsData.map((apparel) => (
            <ApparelCard key={apparel.id} apparel={apparel} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ApparelCard = ({ apparel }) => {
  return (
    <div className='apparel-card'>
      <Helmet>
        <title>Shop | The Christ Culture</title>
        <meta name="description" content={`Get the ${apparel.title} from Christ Culture`} />
      </Helmet>
      <div className="apparel-image-container">
        <img 
          src={apparel.images.back} 
          alt={`${apparel.title} back view`}
          className="apparel-image back"
        />
        <img 
          src={apparel.images.front} 
          alt={`${apparel.title} front view`}
          className="apparel-image front"
        />
      </div>
      <div className="apparel-info">
        <h3 className="apparel-title">{apparel.title}</h3>
        <button className="view-button">
          View Details <span className="star">★</span>
        </button>
      </div>
    </div>
  );
};

export default Shop
