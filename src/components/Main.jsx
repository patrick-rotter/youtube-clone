import React from "react";
import videos from "../data/sampleData";
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
