import React from "react";
import './Video.css'

const Videos = () => {
  return (
    <div className="video">
      <iframe
        width='890'
        height='500'
        src='https://www.youtube.com/embed/XKfgdkcIUxw'
        title='YouTube video player'
        frameBorder='0'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Videos;
