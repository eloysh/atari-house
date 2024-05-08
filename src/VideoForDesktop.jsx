// VideoForDesktop.jsx
import React from 'react';
import videoSource from './video.mp4';

const VideoForDesktop = () => {
  return (
    <video autoPlay loop muted className="full-width-half-height-video">
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoForDesktop;
