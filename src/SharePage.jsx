import React, { useState } from 'react';

const SharePage = ({ name, valentineName, onPreview }) => {
  const [copied, setCopied] = useState(false);

  // Generate the shareable link using current origin and query params
  const shareUrl = `${window.location.origin}?sender=${encodeURIComponent(name)}&valentine=${encodeURIComponent(valentineName)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ textAlign: 'center' }}>
        <h2>🎉 Link Generated!</h2>
        <p>Share this link with your Valentine to ask them:</p>
        
        <div className="share-link-box" style={{ 
          background: '#f5f5f5', 
          padding: '10px', 
          borderRadius: '5px',
          wordBreak: 'break-all',
          marginBottom: '15px',
          fontSize: '0.9em'
        }}>
          {shareUrl}
        </div>

        <button 
          onClick={handleCopy} 
          style={{ marginBottom: '10px', backgroundColor: copied ? '#4CAF50' : '#ff4081' }}
        >
          {copied ? 'Copied!' : 'Copy Link'}
        </button>

        <button 
          onClick={onPreview}
          style={{ backgroundColor: 'transparent', border: '1px solid #ff4081', color: '#ff4081' }}
        >
          Preview the Magic
        </button>
        
        <p style={{ fontSize: '0.8em', color: '#888', marginTop: '10px' }}>
          Note: Since we don't have a server, the uploaded photo will only be visible to you (the preview). 
          The recipient will see the default cute image unless you provide a public Image URL.
        </p>
      </div>
    </div>
  );
};

export default SharePage;
