import React from 'react';
import menuPDF from '../menu.pdf'; // Import your PDF file
import bam from '../back.png'
const ScrollMenu = () => {
  return (
    <div>
      {/* Other content in the middle */}
      

      {/* Bottom section (menu) with embedded PDF */}
      <div id="menu" style={menuStyle}>
        {/* Displaying PDF in an iframe */}
        <iframe
          src={menuPDF}
          title="Menu PDF"
          style={iframeStyle}
        />
      </div>
    </div>
  );
};

// Inline styles for the components
const contentStyle = {
  minHeight: '2px', // Just to create space for scrolling
  padding: '20px',
  textAlign: 'center',
  backgroundImage: `url(${bam})`, // Use the imported image
  color: '#ccc',
  fontSize: '2rem',
};

const menuStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderTop: '2px solid #ccc',
  textAlign: 'center',
};

const iframeStyle = {
  border: 'none', // Remove iframe border
  width: '100%', // Full width of the parent container
  height: '1000px', // Set the height to a larger value
  backgroundImage: `url(${bam})`, // Use the imported image

};

export default ScrollMenu;