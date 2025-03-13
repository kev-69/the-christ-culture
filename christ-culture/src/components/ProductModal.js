import React, { useState, useEffect } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [selectedMaterial, setSelectedMaterial] = useState('light');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Convert object images to array for mapping
  const productImages = product ? [
    { id: 'front', src: product.images.front, alt: `${product.title} front view` },
    { id: 'back', src: product.images.back, alt: `${product.title} back view` },
    { id: 'person1', src: product.images.person1, alt: `${product.title} Person 1` },
    { id: 'person2', src: product.images.person2, alt: `${product.title} Person 2` }
  ] : [];
  
  // Reset selected image when modal opens with a new product
  useEffect(() => {
    if (isOpen && product) {
      setSelectedImageIndex(0);
    }
  }, [isOpen, product]);
  
  if (!isOpen || !product) return null;

  // Prevent body scroll when modal is open
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  }

  const handleClose = () => {
    document.body.style.overflow = 'auto';
    onClose();
  };

  // WhatsApp order function
  const openWhatsAppOrder = () => {
    const phoneNumber = "+233257677987"; // Update with your actual number
    
    // Create a pre-filled message
    const message = `Hello! I'd like to make an enquiry about your product: \n\n*${product.title}*\n*Material: ${selectedMaterial === 'light' ? 'Semi-Heavy' : 'Heavy'} Cotton* \n*Price: GHS ${selectedMaterial === 'light' ? product.lightPrice : product.heavyPrice}* \n\nThank you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={handleClose}>×</button>
        
        <div className="modal-content">
          <div className="modal-left">
            <div className="modal-image-container">
              <img 
                src={productImages[selectedImageIndex].src}
                alt={productImages[selectedImageIndex].alt}
                className="modal-image"
              />
            </div>
            <div className="image-gallery-container">
              <div className="image-gallery">
                {productImages.map((image, index) => (
                  <div 
                    key={image.id}
                    className={`gallery-thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img src={image.src} alt={image.alt} className='active-img' />
                  </div>
                ))}
              </div>
            </div>

            {/* <h2 className="modal-title">{product.title}</h2> */}
          </div>
          
          <div className="modal-right">
            <div className="product-description">
              <h3>{product.title}</h3>
              <p>{product.description || 'A high-quality apparel item from The Christ Culture, designed to inspire faith and encourage believers in their daily walk.'}</p>
              <p>Inspired by {product.quote}</p>
            </div>
            
            <div className="material-selection">
              <h3>Select Cotton type</h3>
              <div className="material-buttons">
                <button 
                  className={`material-btn ${selectedMaterial === 'light' ? 'selected' : ''}`}
                  onClick={() => setSelectedMaterial('light')}
                >
                  Semi - Heavy
                </button>
                <button 
                  className={`material-btn ${selectedMaterial === 'heavy' ? 'selected' : ''}`}
                  onClick={() => setSelectedMaterial('heavy')}
                >
                  Heavy
                </button>
              </div>
            </div>
            
            <div className="product-price">
              <h3>Price</h3>
              <p className="price">
                GHS {selectedMaterial === 'light' ? 
                  (product.lightPrice) : 
                  (product.heavyPrice)}
              </p>
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={openWhatsAppOrder}
            >
              Send Order Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;