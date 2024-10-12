import React, { useEffect } from 'react';
import back from './back3.png'
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

  const headerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    position: 'absolute',
    zIndex: 3, // Ensures the header text is on top of everything
    bottom: '200px',           // Distance from the bottom of the screen

  };

  const linkStyle = {
    color: '#633c14',
    fontFamily: 'Sawarabi Mincho, serif',
    position: 'relative',
    top: '-450px'
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',  // Stack items vertically (pin above text)
    alignItems: 'center',     // Center the pin and text horizontally
    justifyContent: 'center', // Center items within the container
    marginTop: '1000px',        // Adjust this value to move the container down
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
    fontSize: '25px',  // Adjust the font size if needed
    textAlign: 'center',  // Center the text
    opacity: '.8'

  };
  // Apply smooth scroll behavior to the whole document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div style={appStyle}>
    

              <header style={headerStyle}>
                <p></p>
                <a
                  href="#menu" // This will scroll the page to the bottom section
                  style={linkStyle}
                >
                  Menu
                </a>
              
                
              </header>
          <div style={containerStyle}>
          <a 
            href="https://www.google.com/maps/dir//7441+Girard+Ave,+La+Jolla,+CA+92037/@32.8398382,-117.3543808,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dc033810456245:0x31d77d003060e923!2m2!1d-117.272068!2d32.8398517?entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D"
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
          
          <a style={infoStyle}>
            Haru sushi, 7441 Girard Ave, La Jolla, CA 92037
          </a>
        </div>
    </div>
  );
}

export default App;