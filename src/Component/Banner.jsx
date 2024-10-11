// Banner.jsx
import React from 'react';

const Banner = () => {
  const bannerStyle = {
    backgroundColor: '#282c34',
    textAlign: 'center',
    padding: '20px',
  };

  const textStyle = {
    fontSize: '3rem',
    color: '#ccc',
    margin: 0,
    fontFamily: 'Sawarabi Mincho, serif'
  };

  return (
    <div style={bannerStyle}>
      <h1 style={textStyle}>Haru Sushi</h1>
    </div>
  );
}

export default Banner;