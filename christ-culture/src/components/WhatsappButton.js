import React from 'react';
import './WhatsappButton.css';

const WhatsAppButton = ({ phoneNumber, message }) => {
  // Format the phone number (remove any non-digit characters)
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message || '')}`;
  
  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" className="whatsapp-icon">
        <path fill="#FFFFFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path fill="#FFFFFF" d="M12 22.162c-1.68 0-3.33-.377-4.827-1.094l-5.173 1.353 1.386-5.066C2.523 15.78 2.096 13.9 2.096 11.967 2.096 6.588 6.573 2.11 12 2.11s9.904 4.477 9.904 9.857S17.427 22.162 12 22.162zm0-18.176c-4.566 0-8.228 3.663-8.228 8.176 0 1.787.578 3.51 1.673 4.922l-1.098 4.01 4.112-.937c1.382.796 2.935 1.215 4.515 1.215 4.566 0 8.228-3.663 8.228-8.176S16.566 3.986 12 3.986z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;