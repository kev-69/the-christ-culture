import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import './Shop.css'

import ProductModal from '../components/ProductModal';
import { ApparelsData } from '../data'

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeProductModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='shop'>
      <Helmet>
        <title>Shop | The Christ Culture</title>
        <meta name="description" content="Browse our collection of faith-inspired apparel and lifestyle products" />
      </Helmet>
      
      <div className="shop-banner">
        <div className="hero-content">
          <h1>Shop</h1>
          <p>Choose from a variety of mockups</p>
        </div>
      </div>

      <div className='apparels'>
        <h2>Apparels</h2>
        <div className="apparels-grid">
          {ApparelsData.map((apparel) => (
            <ApparelCard 
              key={apparel.id} 
              apparel={apparel} 
              openProductModal={openProductModal} 
            />
          ))}
        </div>
      </div>

      {/* Single Product Modal for the entire page */}
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={closeProductModal}
      />
    </div>
  )
}

const ApparelCard = ({ apparel, openProductModal }) => {
  return (
    <div className='apparel-card'>
      <div className="apparel-image-container">
        <img 
          src={apparel.images.back} 
          alt={`${apparel.name} back view`}
          className="apparel-image back"
        />
        <img 
          src={apparel.images.front} 
          alt={`${apparel.name} front view`}
          className="apparel-image front"
        />
      </div>
      <div className="apparel-info">
        <h3 className="apparel-title">{apparel.name}</h3>
        <button 
          className="view-button"
          onClick={() => openProductModal(apparel)}
        >
          View Details <span className="star">★</span>
        </button>
      </div>
    </div>
  );
};

export default Shop;