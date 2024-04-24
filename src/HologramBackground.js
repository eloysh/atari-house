import React from 'react';

const HologramBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src={`${process.env.PUBLIC_URL}/videos/1.mp4`} type="video/1.mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HologramBackground;
