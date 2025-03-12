import React from 'react'
import { Helmet } from 'react-helmet';
import './Collections.css'

const Collections = () => {
  return (
    <div className='collections'>
      <Helmet>
        <title>Collections | The Christ Culture</title>
        <meta
          name='description'
          content='The Christ Culture is dedicated to creating meaningful products that inspire faith and encourage believers in their daily walk.'
        />
      </Helmet>   
      <div className="collections-banner">
        <div className="hero-content">
          <h1>Collections</h1>
          <p>Choose from a variety of mockups</p>
        </div>   
    </div>
    </div>
  )
}

export default Collections
