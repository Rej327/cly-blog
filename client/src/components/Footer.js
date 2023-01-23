import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-12 w-full">
      <h1 className="text-center">© 2023. ALL RIGHTS RESERVED</h1>
      <div className="w-auto">
        <ul className="flex justify-center gap-4 mt-4 pb-4">
          <Link to="/">
            <li>Blog</li>
          </Link>
          <Link to="about-me">
            <li>About Me</li>
          </Link>
          <Link to="contact-me">
            <li>Contact Me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
