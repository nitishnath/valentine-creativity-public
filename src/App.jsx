import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import './App.css';
import  valentineImg from './assets/valentine_img.jpg';
import  trappedImg from './assets/default-img.jpeg';
import IntroModal from './IntroModal';
import SharePage from './SharePage';

// Placeholder for the "kissing" image/video
const KISSING_IMG = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
// Placeholder for the "trapped" image

function App() {
  const [accepted, setAccepted] = useState(false);
  const [showTrapped, setShowTrapped] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 'auto', left: 'auto', position: 'static' });
  const [isShy, setIsShy] = useState(false);
  
  // 'loading', 'intro', 'share', 'content'
  const [currentView, setCurrentView] = useState('loading');
  
  const [userData, setUserData] = useState({
    name: '',
    valentineName: '',
    photo: null,
  });
  const noButtonRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sender = params.get('sender');
    const valentine = params.get('valentine');

    if (sender && valentine) {
      setUserData({
        name: sender,
        valentineName: valentine,
        photo: null
      });
      setCurrentView('content');
    } else {
      setCurrentView('intro');
    }
  }, []);

  const handleYesClick = () => {
    setAccepted(true);
    // Launch confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
    // Fire more confetti after a short delay
    setTimeout(() => {
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
          });
          confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
          });
    }, 500);
  };

  const moveNoButton = () => {
    if (!noButtonRef.current) return;
    
    // Get button dimensions
    const buttonRect = noButtonRef.current.getBoundingClientRect();

    // Calculate available window area
    const maxX = window.innerWidth - buttonRect.width;
    const maxY = window.innerHeight - buttonRect.height;

    // Generate a random position within the viewport
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setNoButtonPosition({
      position: 'fixed',
      top: `${randomY}px`,
      left: `${randomX}px`,
      transition: 'all 0.3s ease-in-out',
      zIndex: 9999 // Ensure it's on top
    });
    setIsShy(true);
  };

  const handleThinkAgain = () => {
    setShowTrapped(true);
  };

  const handleAcceptFate = () => {
    setShowTrapped(false);
    // Keep accepted = true, so we go back to the success screen
  };

  const handleContinue = (data) => {
    setUserData(data);
    setCurrentView('share');
  };

  const handlePreview = () => {
    setCurrentView('content');
  };

  if (currentView === 'loading') {
    return null; // Or a loading spinner
  }

  if (currentView === 'intro') {
    return <IntroModal onContinue={handleContinue} />;
  }

  if (currentView === 'share') {
    return (
      <SharePage 
        name={userData.name} 
        valentineName={userData.valentineName} 
        onPreview={handlePreview} 
      />
    );
  }

  return (
    <div className="container">
      {!accepted ? (
        <div className="card" ref={cardRef}>
          <img 
            src={valentineImg} 
            alt="Cute asking cat" 
            className="main-image"
          />
          <h1 className="question">{userData.valentineName}, will you be my valentine?</h1>
          <div className="button-group">
            <button 
              className="yes-button" 
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button 
              ref={noButtonRef}
              className="no-button"
              style={noButtonPosition}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton} // Also move on click just in case
            >
              No
            </button>
          </div>
          <div className="shy-text-container">
            {isShy && <p className="shy-text">"No" seems a bit shy 😈</p>}
          </div>
        </div>
      ) : showTrapped ? (
        <div className="success-card">
          <h1 className="success-text">Refund Policy: REJECTED! 🚫</h1>
          <img 
            src={userData.photo ? URL.createObjectURL(userData.photo) : trappedImg} 
            alt="Cute trapped cat" 
            className="success-image"
          />
          <p className="message">
            There is no go back option! You are hooked and don't ever think to go back. 
            You know that {userData.name} and {userData.valentineName} are a good couple and {userData.name} loves you soo much! 😉❤️
          </p>
          <button className="yes-button" onClick={handleAcceptFate}>
            Okay, I agree! 🥰
          </button>
        </div>
      ) : (
        <div className="success-card">
          <h1 className="success-text">YAY! ❤️</h1>
          <img 
            src={KISSING_IMG} 
            alt="Kissing meme" 
            className="success-image"
          />
          <p className="message">Every love story is beautiful, but ours is my favorite. ❤️</p>
          <button className="think-again-button" onClick={handleThinkAgain}>
            Think again
          </button>
        </div>
      )}
      <div className="footer">Designed by Nitish</div>
    </div>
  );
}

export default App;
