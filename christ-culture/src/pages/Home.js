import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      {/* Hero Banner */}
      <div className='hero-banner'>
        <div className='hero-content'>
          <h1>The Christ Culture</h1>
          <p>Faith-inspired apparel and lifestyle products</p>
          <div className='hero-buttons'>
            <a href='/shop' className='btn btn-primary'>Shop Now</a>
          </div>
        </div>
      </div>

      {/* Products */}
      <section className='featured-section'>
        <h2>Featured Products</h2>
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
