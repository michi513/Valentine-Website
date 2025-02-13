// src/components/Gallery.js
import React from 'react';
import './Gallery.css'; // For styling

const GalleryPage = ({ onBack }) => {
  // Array of images for the collage
  const images = [
    { src: './GalleryImage/Image3.jpg', alt: 'First concert together' },
    { src: './GalleryImage/Image1.jpg', alt: 'First Meeting' },
    { src: './GalleryImage/Image2.jpg', alt: 'I SAID YES!!' },
    { src: './GalleryImage/Image4.jpg', alt: 'First beach' },
    { src: './GalleryImage/Image5.jpg', alt: 'Happiest Birthday' },
    { src: './GalleryImage/Image7.jpg', alt: 'First time hospital huhu' },
    { src: './GalleryImage/Image8.jpg', alt: 'Jack and Rose Yuri edition' },
    { src: './GalleryImage/Image6.jpg', alt: 'Living together simulation' },
  ];

  return (
    <div className="gallery-page">
      <h2>My favorite photos</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Back button */}
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default GalleryPage;
