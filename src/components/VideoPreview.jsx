import React from "react";

const VideoPreview = (props) => {
  return (
    <div className="video-preview">
      <div className="thumbnail-row">
        <img className="thumbnail" src={props.thumbnail} alt="Thumbnail" />
        <div className="video-time">{props.time}</div>
      </div>

      <div className="video-info-grid">
        <div className="channel-picture">
          <img
            className="channel-picture"
            src={props.channelPicture}
            alt="Channel Pic"
          />
        </div>
        <div className="video-info">
          <p className="video-title">{props.title}</p>
          <p className="video-author">{props.author}</p>
          <p className="video-stats">{props.views} views &#183; {props.released}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
