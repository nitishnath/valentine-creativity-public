import React, { useState } from 'react';

const IntroModal = ({ onContinue }) => {
  const [name, setName] = useState('');
  const [valentineName, setValentineName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState('');

  const handleContinue = () => {
    onContinue({ name, valentineName, photo, photoUrl });
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label style={{ fontSize: '0.9em', color: '#666' }}>Upload a photo (Local preview only):</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>
        
        <div style={{ textAlign: 'center', color: '#888', fontSize: '0.8em' }}>- OR -</div>

        <input
          type="text"
          placeholder="Paste Image Link (Best for sharing!)"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
        
        <button onClick={handleContinue} disabled={!isFormValid}>
          Continue to see the magic
        </button>
      </div>
    </div>
  );
};

export default IntroModal;
