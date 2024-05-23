// pages/gallery.tsx
import React from "react";
import dynamic from "next/dynamic";
import LazyYoutubeServer from "../components/LazyYoutubeServer";

// Dynamically import the client component
const LazyYoutubeClient = dynamic(
  () => import("../components/LazyYoutubeClient"),
  { ssr: false }
);

interface GalleryProps {
  videoId: string;
}

const VideoGallery: React.FC<GalleryProps> = ({ videoId }) => {
  return (
    <div>
      <LazyYoutubeServer videoId={videoId} />
      <LazyYoutubeClient videoId={videoId} />
    </div>
  );
};

export async function getServerSideProps() {
  // Example of passing videoId from server side, replace with your logic
  const videoId = "your_video_id_here";

  return {
    props: {
      videoId,
    },
  };
}

export default VideoGallery;
