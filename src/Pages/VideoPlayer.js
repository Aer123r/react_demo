import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-hls';

const HLSPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    let player;

    // Check if the video element exists before initializing
    if (videoRef.current) {
      // Initialize the video.js player
      player = videojs(videoRef.current, {
        // Specify the options here, if needed
        // For example:
        // autoplay: true,
        // controls: true,
        // fluid: true,
      });

      // Load the HLS video source
      player.src({
        src: 'your_hls_video_url_here.m3u8',
        type: 'application/x-mpegURL', // HLS MIME type
      });
    }

    // Clean up the player when the component unmounts
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" />
    </div>
  );
};

export default HLSPlayer;
