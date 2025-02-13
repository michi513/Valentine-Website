// src/components/Homepage.js
import React from 'react';

const HomePage = ({ onChooseDate, onGallery, onLoveStory, onMessage }) => {
  return (
    <div className="home-page">
      <h1>Thank you for choosing me as your Valentine! Welcome to my Valentine Planner &lt;3</h1>
      
      <button onClick={onChooseDate}>Pick a Date</button>
      <button onClick={onGallery}>View Gallery</button>
      <button onClick={onLoveStory}>Love Story</button>
      <button onClick={onMessage}>A Letter</button>
      

    </div>
  );
};

export default HomePage;
