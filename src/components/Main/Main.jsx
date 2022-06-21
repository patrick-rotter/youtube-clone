import React from "react";
import videos from "../../data/videos";
import VideoPreview from "./VideoPreview";

const Main = () => {
  return (
    <section className="video-grid">
      {videos.map((video) => (
        <VideoPreview {...video} />
      ))}
    </section>
  );
};

export default Main;
