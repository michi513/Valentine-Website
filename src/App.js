// src/App.js
import React, { useState } from 'react';
import './App.css';
import PasscodePage from './components/Passcode';
import HomePage from './components/Homepage';
import DatePickerPage from './components/DatePicker';
import GalleryPage from './components/Gallery';
import LoveStoryPage from './components/LoveStory';
import MessagePage from './components/Message';
import ValentineAskPage from './components/ValentineAsk';

function App() {
  const [page, setPage] = useState('passcode');  // Default page

  // Passcode submission
  const handlePasscodeSubmit = () => {
    setPage('valentine-ask');
  };

  // Valentine Ask Page
  const handleYes = () => {
    setPage('home');
  };

  const handleBack = () => {
    setPage('home'); // To ensure the back button always returns to HomePage
  };

  const handleChooseDate = () => {
    setPage('date-picker');
  };

  const handleGallery = () => {
    setPage('gallery');
  };

  const handleLoveStory = () => {
    setPage('love-story');
  };

  const handleMessage = () => {
    setPage('message');
  };

  return (
    <div className="App">
      {/* Conditional rendering for different pages */}
      {page === 'passcode' && <PasscodePage onPasscodeSubmit={handlePasscodeSubmit} />}
      {page === 'valentine-ask' && <ValentineAskPage onYes={handleYes} />}
      {page === 'home' && (
        <HomePage
          onChooseDate={handleChooseDate}
          onBack={handleBack}
          onGallery={handleGallery}
          onLoveStory={handleLoveStory}
          onMessage={handleMessage}
        />
      )}
      {page === 'date-picker' && <DatePickerPage onBack={handleBack} />}
      {page === 'gallery' && <GalleryPage onBack={handleBack} />}
      {page === 'love-story' && <LoveStoryPage onBack={handleBack} />}
      {page === 'message' && <MessagePage onBack={handleBack} />}
    </div>
  );
}

export default App;
