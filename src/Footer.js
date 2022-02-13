import React from "react";
import Contact from "./Contact";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <Contact />
      <div className="code">Find the code at:</div>
      &copy;{today.getFullYear()} Justin Henley
    </footer>
  );
};

export default Footer;
