// src/components/PasscodePage.js
import React, { useState } from 'react';

const PasscodePage = ({ onPasscodeSubmit }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === '12012022') { // Replace with your passcode
      onPasscodeSubmit();
    } else {
      setError('Incorrect passcode. Try again. Hint: I said YES!');
    }
  };

  return (
    <div className="passcode-page">
      <h2>Happy Valentines to my pretty baby girl!</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="password" 
          placeholder="Enter the passcode" 
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PasscodePage;
