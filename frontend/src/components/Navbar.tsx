import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="custom_navbar container">
      <div className="navbar_content">
        <div className="nav_logo">
          <a href="#">
            <img src="images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="nav_items">
          <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="calendar.html">Calendar</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
