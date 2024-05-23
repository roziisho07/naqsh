// components/LazyYoutubeServer.tsx
import React from "react";

interface LazyYoutubeServerProps {
  videoId: string;
}

const LazyYoutubeServer: React.FC<LazyYoutubeServerProps> = ({ videoId }) => {
  return <div data-video-id={videoId} className="youtube-placeholder "></div>;
};

export default LazyYoutubeServer;
