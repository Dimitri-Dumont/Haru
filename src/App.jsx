import React, { useEffect } from 'react';
import back from './back4.png'
import GoogleMapsPin from './pin.svg';

function App() {
  // Inline styles
  const appStyle = {

    backgroundColor: '#282c34',
    textAlign: 'center',
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    scrollBehavior: 'smooth', // Enable smooth scrolling
    backgroundImage: `url(${back})`, // Use the imported image
    backgroundPosition: 'center', /* Centers the image horizontally and vertically */
    backgroundSize: 'cover'
  };
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',   // Stack items vertically
    alignItems: 'center',       // Center items horizontally
    justifyContent: 'center',   // Center items within the container
    position: 'absolute',       // Position relative to the nearest parent with `relative`
    bottom: '1px',             // 20px from the bottom of the screen
    left: '50%',                // Move to the horizontal center
    transform: 'translateX(-50%)', // Ensure perfect horizontal centering
    zIndex: 10,                 // Keep the container above other elements
    width: '100%',              // Optional: Adjust to fit the content properly
    maxWidth: '600px',          // Optional: Prevent the container from becoming too wide
  };
  const linkStyle = {
    color: '#633c14',
    fontFamily: 'Sawarabi Mincho, serif',
    fontSize: '40px',     // Adjust the font size as needed
    position: 'absolute',  // Position relative to the nearest positioned ancestor
    top: '20px',           // Distance from the top of the page
    left: '50%',           // Center horizontally
    transform: 'translateX(-50%)', // Adjust for perfect horizontal centering
    zIndex: 10,            // Ensure it stays on top of other elements
  };
  
  
  const mapPinStyle = {
    fontFamily: 'Sawarabi Mincho, serif',
    position: 'relative',
    zIndex: 5,
    cursor: 'pointer',
    width: '300px',   // Increase this value to make the pin bigger
    height: 'auto',   // Maintain the aspect ratio automatically based on the width
    marginBottom: '10px',  // Space between the pin and the address
  };
  
  const infoStyle = {
    color: '#000000',
    fontFamily: 'Sawarabi Mincho, serif',
    fontSize: '25px',
    textAlign: 'center',  // Align text to center within the element
    opacity: '.5',
    display: 'flex',       // Use flex for alignment within the element
    justifyContent: 'center', // Center text horizontally inside the element
    position: 'absolute',  // Position relative to the nearest relative parent
    bottom: '120px',        // 20px from the bottom of the screen
    left: '50%',           // Move to the center of the screen horizontally
    transform: 'translateX(-50%)', // Ensure perfect centering
    zIndex: 10,            // Ensure it stays on top of other content
  };

  const infoStyle2 = {
    color: '#000000',
    fontFamily: 'Sawarabi Mincho, serif',
    fontSize: '25px',
    textAlign: 'center',  // Align text to center within the element
    opacity: '.5',
    display: 'flex',       // Use flex for alignment within the element
    justifyContent: 'center', // Center text horizontally inside the element
    position: 'absolute',  // Position relative to the nearest relative parent
    bottom: '225px',        // 20px from the bottom of the screen
    left: '50%',           // Move to the center of the screen horizontally
    transform: 'translateX(-50%)', // Ensure perfect centering
    zIndex: 10,            // Ensure it stays on top of other content
  };
  // Apply smooth scroll behavior to the whole document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div style={appStyle}>
      <a href="#menu" style={linkStyle}>
        Menu
      </a>
  
    <div style={containerStyle}>
      <a 
        href="https://www.google.com/maps/dir//7441+Girard+Ave,+La+Jolla,+CA+92037"
        target="_blank"
        rel="noopener noreferrer"
        style={mapPinStyle}
      >
        <img
          src={GoogleMapsPin}
          alt="Google Maps Pin"
          style={{ width: '100px' }}  
        />
      </a>
      <a style={infoStyle2}>
        (858) 246-6150 <br /><br />
        Wednesday - Sunday    <br/>  5 - 9 pm
        <br />
      </a>
      <a style={infoStyle}>
      <br />
        7441 Girard Ave,<br />
        La Jolla, CA 92037
      </a>
    </div>
  </div>
  );
}

export default App;