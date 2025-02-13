// src/components/DatePicker.js
import React, { useState } from 'react';
import './DatePicker.css';

const DatePickerPage = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedIdea, setSelectedIdea] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const dateIdeas = [
    'Picnic and Paint',
    'Movie Night Marathon (Your Choice)',
    'Fancy Dinner',
    'Manila Date',
    'Coffee Date',
  ];

  // Function to handle date and idea submission
  const handleDateSubmit = () => {
    if (selectedDate && selectedIdea) {
      setShowModal(true); // Show modal with the confirmation message
    } else {
      alert('Please select both a date and an idea.');
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="date-picker-page">
      <h2>Pick a date and choose an idea!</h2>
      
      {/* Date picker input */}
      <input 
        type="date" 
        value={selectedDate} 
        onChange={(e) => setSelectedDate(e.target.value)} 
      />
      
      {/* Dropdown for date ideas */}
      <select 
        onChange={(e) => setSelectedIdea(e.target.value)} 
        value={selectedIdea}
      >
        <option value="">Select a date idea</option>
        {dateIdeas.map((idea, index) => (
          <option key={index} value={idea}>{idea}</option>
        ))}
      </select>
      
      {/* Confirm button */}
      <button onClick={handleDateSubmit}>Confirm Date</button>
      
      {/* Back button */}
      <button onClick={onBack}>Back</button> {/* Back button to navigate to previous page */}
      
      {/* Modal for Confirmation */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Your Date is Confirmed! Please screenshot this and send it to me &lt;3</h3>
            <p><strong>Date:</strong> {selectedDate}</p>
            <p><strong>Idea:</strong> {selectedIdea}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePickerPage;
