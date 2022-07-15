import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <img
          className="hamburger-menu"
          src="./icons/hamburger-menu.svg"
          alt="Hamburger Menu"
        />
        <img
          className="youtube-logo"
          src="./icons/youtube-logo.svg"
          alt="Youtube Logo"
        />
      </div>
      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-btn">
          <img
            className="search-icon"
            src="./icons/search.svg"
            alt="Search Icon"
          />
          <div className="tooltip">Search</div>
        </button>
        <button className="voice-search-btn">
          <img
            className="voice-search-icon"
            src="./icons/voice-search-icon.svg"
            alt="Voice Search Icon"
          />
          <div className="tooltip">Search with your voice</div>
        </button>
      </div>
      <div className="right-section">
        <div className="upload-icon-container">
          <img
            className="upload-icon"
            src="./icons/upload.svg"
            alt="Upload Icon"
          />
          <div className="tooltip">Create</div>
        </div>
        <div className="youtube-apps-icon-container">
          <img
            className="youtube-apps-icon"
            src="./icons/youtube-apps.svg"
            alt="Youtube Apps Icon"
          />
          <div className="tooltip">YouTube apps</div>
        </div>
        <div className="notifications-icon-container">
          <img
            className="notifications-icon"
            src="./icons/notifications.svg"
            alt="Notifications Icon"
          />
          <div className="notifications-count">3</div>
          <div className="tooltip">Notifications</div>
        </div>
        <img
          className="current-user-pic"
          src="./channel-picture/myPic.jpg"
          alt="Current User Pic"
        />
      </div>
    </header>
  );
};

export default Header;
