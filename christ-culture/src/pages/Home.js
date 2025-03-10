import React, { useState, useEffect } from 'react'
import './Home.css'

import homeBg1 from '../assets/banners/homebg1.PNG'
import homeBg2 from '../assets/banners/homebg2.PNG'

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [homeBg1, homeBg2];

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
        <h2>Featured Products</h2>
        <div className="section-header">
            <h2>King's Essentials</h2>
            <a href="/shop" className="view-all">View All</a>
        </div>
        <div className='featured-grid'>
          <div className='product-card'>
            <div className='product-image'></div>
            <h3>Product Title</h3>
            <p>$29.99</p>
          </div>
          <div className='product-card'>
            <div className='product-image'></div>
            <h3>Product Title</h3>
            <p>$29.99</p>
          </div>
          <div className='product-card'>
            <div className='product-image'></div>
            <h3>Product Title</h3>
            <p>$29.99</p>
          </div>
          <div className='product-card'>
            <div className='product-image'></div>
            <h3>Product Title</h3>
            <p>$29.99</p>
          </div>
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
