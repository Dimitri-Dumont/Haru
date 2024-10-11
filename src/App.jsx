import React, { useEffect } from 'react';
import back from './back2.png'

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

  const headerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    position: 'relative',
    zIndex: 3, // Ensures the header text is on top of everything

  };

  const linkStyle = {
    color: '#633c14',
    fontFamily: 'Sawarabi Mincho, serif',
    position: 'relative',
    top: '-450px'
  };
  const infoStyle = {
    color: '#633c14',
    fontFamily: 'Sawarabi Mincho, serif',
    position: 'relative',
    top: '-450px'
  };
  const mapPinStyle = {
    position: 'absolute',
    bottom: '80px', // Adjust this value to position the icon
    right: '650px',  // Adjust this value to position the icon
    zIndex: 5,
    cursor: 'pointer',
    width: '40px', // Size of the map pin image/icon
  };
  // Apply smooth scroll behavior to the whole document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div style={appStyle}>
      <style>
        {`
          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <header style={headerStyle}>
        <p></p>
        <a
          href="#menu" // This will scroll the page to the bottom section
          style={linkStyle}
        >
          Menu
        </a>
        <a
          href="#info" // This will scroll the page to the bottom section
          style={infoStyle}
        >
          
        </a>
        
      </header>
      {/* Add Google Maps Pin Icon */}
      <a 
        href="https://www.google.com/maps/dir//7441+Girard+Ave,+La+Jolla,+CA+92037/@32.8398382,-117.3543808,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dc033810456245:0x31d77d003060e923!2m2!1d-117.272068!2d32.8398517?entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D" // Replace with your Google Maps URL
        target="_blank"
        rel="noopener noreferrer"
        style={mapPinStyle}
        
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg" // URL to a pin image or use a local file
          alt="Google Maps Pin"
          style={{ width: '100%' }} // This controls the size of the pin
        />
      </a>
    </div>
  );
}

export default App;