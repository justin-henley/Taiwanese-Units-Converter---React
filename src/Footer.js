import React from "react";
import Contact from "./Contact";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <Contact />
      &copy;{today.getFullYear()} Justin Henley
    </footer>
  );
};

export default Footer;
