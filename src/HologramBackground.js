// HologramBackground.js
import React from 'react';

const HologramBackground = () => (
  <div className="video-background">
    <video autoPlay muted loop>
      <source src="./video/1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default HologramBackground;
