import React, { useEffect } from 'react'
import flvjs from 'flv.js'
export default function VideoPlayer() {
  useEffect(()=>{
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement');
      var flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: 'http://192.168.8.209:8080/live/livestream.flv'
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      
      setTimeout(()=>{
        flvPlayer.play();
      },1000)
     
  }
  return ()=>{
    flvPlayer.unload();
    flvPlayer.detachMediaElement();
  }
  },[])
  return (
    <div>
      <video id="videoElement" controls={true}></video>
    </div>
  )
}
