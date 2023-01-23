import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h1>© 2022. ALL RIGHTS RESERVED</h1>
      <div>
        <ul>
          <LINK to="/">
            <li>Blog</li>
          </LINK>
          <LINK to="about-me">
            <li>About Me</li>
          </LINK>
          <LINK to="contact-me">
            <li>Contact Me</li>
          </LINK>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
