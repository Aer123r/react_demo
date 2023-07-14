import { useEffect, useRef, useState } from 'react';

function useWebRTCVideo(url) {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // 创建一个 RTCPeerConnection 对象
    const peerConnection = new RTCPeerConnection();

    // 添加远程视频轨道（通过 WebSocket 等方式获取）
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => {
        const blob = new Blob([new Uint8Array(buffer)]);
        const url = window.URL.createObjectURL(blob);
        const remoteStream = new MediaStream();
        const remoteVideoTrack = new MediaStreamTrack({
          kind: 'video',
          id: 'remote-video-track'
        });
        remoteStream.addTrack(remoteVideoTrack);
        videoRef.current.srcObject = remoteStream;
      })
      .catch(error => {
        setError(error);
      });

    return () => {
      // Close the connection and clean up resources
      peerConnection.close();
      URL.revokeObjectURL(videoRef.current.srcObject);
    };
  }, []);

  return { videoRef, error };
}

export default useWebRTCVideo;