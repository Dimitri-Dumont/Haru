import React from 'react';
import menuPDF from '../menu2.pdf';
import bam from '../back.png';

const ScrollMenu = () => {
  return (
    <div id="menu" style={menuStyle}>
      <h2>Our Menu</h2>
      <iframe
        src={menuPDF}
        title="Menu PDF"
        style={iframeStyle}
      />
    </div>
  );
};

// Inline styles
const menuStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
  backgroundImage: `url(${bam})`,
  backgroundSize: 'cover',
};

const iframeStyle = {
  border: 'none',
  width: '100%',
  height: '80vh', // Take up 80% of the viewport height
};

export default ScrollMenu;