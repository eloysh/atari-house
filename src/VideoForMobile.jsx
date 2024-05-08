// VideoForMobile.jsx
import React from 'react';
import videoSource from './video1.mp4';

const VideoForMobile = () => {
  return (
    <video autoPlay loop muted className="full-width-half-height-video">
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoForMobile;
