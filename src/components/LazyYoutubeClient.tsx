// components/LazyYoutubeClient.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazyYoutubeClientProps {
  videoId: string;
}

const LazyYoutubeClient: React.FC<LazyYoutubeClientProps> = ({ videoId }) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef} className="w-full h-auto">
      {load ? (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default LazyYoutubeClient;
