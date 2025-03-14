import React, { useState, useEffect, useMemo } from 'react'
import ProductModal from '../components/ProductModal';
import { Helmet } from 'react-helmet';
import './Home.css'

import homeBg1 from '../assets/banners/homebg1.PNG'
import homeBg2 from '../assets/banners/homebg2.PNG'

// Import gallery images - replace with your actual image paths
import gallery1 from '../assets/gallery/images1.jpg'
import gallery2 from '../assets/gallery/images2.jpg'
import gallery3 from '../assets/gallery/images3.jpg'
import gallery4 from '../assets/gallery/images4.jpg'
import gallery5 from '../assets/gallery/images5.jpg'
import gallery6 from '../assets/gallery/images6.jpg'
import gallery7 from '../assets/gallery/images7.jpg'

import { ApparelsData } from '../data'

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const images = [homeBg1, homeBg2];

    // Get 8 random apparels from the data
    const Apparels = useMemo(() => {
      const shuffled = [...ApparelsData].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 8);
    }, []);
    
    const galleryImagers = useMemo(() => [
      {
        id: 1,
        image: gallery1,
        title: 'Customer wearing The Christ Culture apparel'
      },
      {
        id: 2,
        image: gallery2,
        title: 'Customer wearing The Christ Culture apparel'
      },
      {
        id: 3,
        image: gallery3,
        title: 'Customer wearing The Christ Culture apparel'
      },
      {
        id: 4,
        image: gallery4,
        title: 'Customer wearing The Christ Culture apparel'
      },
      {
        id: 5,
        image: gallery5,
        title: 'Customer wearing The Christ Culture apparel'
      },
      {
        id: 6,
        image: gallery6,
        title: 'Customer wearing The Christ Culture apparel'
      },
      {
        id: 7,
        image: gallery7,
        title: 'Customer wearing The Christ Culture apparel',
      }
    ], []);

    const openProductModal = (product) => {
      setSelectedProduct(product);
      setModalOpen(true);
    };

    const closeProductModal = () => {
      setModalOpen(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

  return (
    <div className='home'>
      <Helmet>
        <title>Home | The Christ Culture</title>
        <meta
          name='description'
          content='The Christ Culture is dedicated to creating meaningful products that inspire faith and encourage believers in their daily walk.'
        />
      </Helmet>
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
            <h1>The Christ Culture</h1>
            <p>Faith-inspired apparel and lifestyle products</p>
            <a href='/shop' className='banner-btn btn btn-primary'>Shop Now</a>
        </div>
        </div>

      {/* Products Section */}
      <section className='products-section'>
        <div className="section-header">
            <h2>Julian's Essentials</h2>
            <a href="/shop" className="view-all">View All</a>
        </div>
        <div className='products-grid'>
          {Apparels.map((apparel) => (
            <div key={apparel.id} className='product-card'>
              <div className='product-image-container'>
                <img 
                  src={apparel.images.back} 
                  alt={`${apparel.name} back view`}
                  className="product-image back"
                />
                <img 
                  src={apparel.images.front} 
                  alt={`${apparel.title} front view`}
                  className="product-image front"
                />
              </div>
              <div className="product-info">
                <h3 className="product-title">{apparel.name}</h3>
                <button 
                  className="view-button"
                  onClick={() => openProductModal(apparel)}
                >
                  View Details <span className="star">★</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className='gallery-section'>
          <div className="section-header">
              <h2>Our Community</h2>
              <span className='section-subtitle'>People wearing our product</span>
          </div>

          <div className="gallery-scroll-container">
            <div className="gallery-scroll">
            {galleryImagers.map((gallery) => (
              <div key={gallery.id} className="gallery-item">
                <img src={gallery.image} alt={gallery.title} className="gallery-image" />
              </div>
            ))}
            </div>
          </div>
      </section>

      {/* Reviews */}

      {/* About Section */}
      <section className='about-section'>
        <div className='about-content'>
          <h2>About Our Mission</h2>
          <p>The Christ Culture is dedicated to creating meaningful products that inspire faith and encourage believers in their daily walk.</p>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={closeProductModal}
      />
    </div>
  )
}

export default Home
