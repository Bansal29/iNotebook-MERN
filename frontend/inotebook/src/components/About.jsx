import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About iNotebook</h1>
      <p className="intro">
        Welcome to iNotebook, your ultimate notes management application! With
        iNotebook, you can effortlessly manage your notes, ensuring that you
        never miss out on any important information.
      </p>

      <div className="feature-section">
        <img
          src="https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/27/main/hxz0RhMzDeHogUZK0JNA82JabI3IstKUUbYB3dD8.png"
          alt="Notes"
          className="feature-image"
        />
        <div className="feature-content">
          <h2>Core Features</h2>
          <ul>
            <li>Signup/signin for user</li>
            <li>Adding notes</li>
            <li>Retrieving notes</li>
            <li>Deleting and updating notes</li>
          </ul>
        </div>
      </div>

      <div className="extra-section">
        <div className="extra-content">
          <h2>Why Choose iNotebook?</h2>
          <p>
            iNotebook is designed to provide you with a seamless experience in
            managing your notes. Whether you are a student, a professional, or
            just someone who loves staying organized, iNotebook is here to cater
            to all your note-taking needs.
          </p>
        </div>
        <img
          src="https://learn.g2.com/hubfs/G2CM_FI671_Learn_Article_Images_%5BNote_taking_apps%5D_V1b.png"
          alt="Features"
          className="extra-image"
        />
      </div>
    </div>
  );
};

export default About;
