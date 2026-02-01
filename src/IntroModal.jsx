import React, { useState } from 'react';

const IntroModal = ({ onContinue }) => {
  const [name, setName] = useState('');
  const [valentineName, setValentineName] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleContinue = () => {
    onContinue({ name, valentineName, photo });
  };

  const isFormValid = name.trim() !== '' && valentineName.trim() !== '';

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Tell me about you</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your valentine's name"
          value={valentineName}
          onChange={(e) => setValentineName(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <button onClick={handleContinue} disabled={!isFormValid}>
          Continue to see the magic
        </button>
      </div>
    </div>
  );
};

export default IntroModal;
