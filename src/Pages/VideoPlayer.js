// import React, { useEffect, useRef } from 'react';
// import videojs from 'video.js';
// import 'videojs-contrib-hls';

// const VideoPlayer = () => {
//   const videoRef = useRef(null);
//   let player;

//   useEffect(() => {
//     // 创建视频播放器
//     player = videojs(videoRef.current, {
//       techOrder: ['html5'],
//       html5: {
//         hls: {
//           enableLowInitialPlaylist: true,
//           smoothQualityChange: true,
//           overrideNative: true
//         }
//       }
//     });

//     // 加载HLS直播流
//     player.src({
//       src: 'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8',
//       type: 'application/x-mpegURL'
//     });

//     return () => {
//       // 在组件卸载时销毁视频播放器
//       if (player) {
//         player.dispose();
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <video ref={videoRef} className="video-js vjs-default-skin"></video>
//     </div>
//   );
// };