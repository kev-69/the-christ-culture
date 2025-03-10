import React, { useState, useEffect, useMemo } from 'react'
import './Home.css'

import homeBg1 from '../assets/banners/homebg1.PNG'
import homeBg2 from '../assets/banners/homebg2.PNG'

import { ApparelsData } from '../data'

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [homeBg1, homeBg2];

    // Get 8 random apparels from the data
    const featuredApparels = useMemo(() => {
      const shuffled = [...ApparelsData].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 8);
    }, []);
    
    // const featuredApparels = getRandomApparels();

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

  return (
    <div className='home'>
        {/* Hero Banner */}
        <div className='hero-banner-container'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Christ Culture ${index + 1}`}
            className={`banner-image ${currentImage === index ? 'active' : ''}`}
          />
        ))}
        <div className="banner-content">
            <h1 className='banner-overlay'>The Christ Culture</h1>
            <p className='banner-description'>Faith-inspired apparel and lifestyle products</p>
            <a href='/shop' className='banner-btn btn btn-primary'>Shop Now</a>
        </div>
        </div>

      {/* Featured Products */}
      <section className='featured-section'>
        <div className="section-header">
            <h2>King's Essentials</h2>
            <a href="/shop" className="view-all">View All</a>
        </div>
        <div className='featured-grid'>
          {featuredApparels.map((apparel) => (
            <div key={apparel.id} className='product-card'>
              <div className='product-image-container'>
                <img 
                  src={apparel.images.back} 
                  alt={`${apparel.title} back view`}
                  className="product-image back"
                />
                <img 
                  src={apparel.images.front} 
                  alt={`${apparel.title} front view`}
                  className="product-image front"
                />
              </div>
              <div className="product-info">
                <div className="product-header">
                  <h3>{apparel.title}</h3>
                  <p className="product-price">GHS{apparel.price}</p>
                </div>
                <button className="view-button">
                  View Details <span className="star">★</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}

      {/* Reviews */}

      {/* About Section */}
      <section className='about-section'>
        <div className='about-content'>
          <h2>About Our Mission</h2>
          <p>The Christ Culture is dedicated to creating meaningful products that inspire faith and encourage believers in their daily walk.</p>
          <a href='/about' className='btn btn-outline'>Learn More</a>
        </div>
      </section>
    </div>
  )
}

export default Home
