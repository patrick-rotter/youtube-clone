import React from "react";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-link">
        <img src="./icons/home.svg" alt="Home Icon" />
        <div>Home</div>
      </div>
      <div className="sidebar-link">
        <img src="./icons/explore.svg" alt="Explore Icon" />
        <div>Explore</div>
      </div>
      <div className="sidebar-link">
        <img src="./icons/subscriptions.svg" alt="Subscriptions Icon" />
        <div>Subscriptions</div>
      </div>
      <div className="sidebar-link">
        <img src="./icons/originals.svg" alt="Originals Icon" />
        <div>Originals</div>
      </div>
      <div className="sidebar-link">
        <img src="./icons/youtube-music.svg" alt="Youtube Music Icon" />
        <div>YouTube Music</div>
      </div>
      <div className="sidebar-link">
        <img src="./icons/library.svg" alt="Library Icon" />
        <div>Library</div>
      </div>
    </nav>
  );
};

export default Sidebar;
