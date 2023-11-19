// import React from 'react'
import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

const Sec2 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.autoplay = true;
      video.loop = true;
      video.play();
    }
  }, []);
  return (
    <Container fluid>
      <video ref={videoRef} width="100%">
        <source
          src="https://cdn.media.amplience.net/v/deciem/D30638-ORD-Slowvember-Web-Essentials-Blog-Vid-01/mp4_720p"
          type="video/mp4"
        />
      </video>
    </Container>
  );
};

export default Sec2;
