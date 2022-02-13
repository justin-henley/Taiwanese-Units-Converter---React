import React from "react";

const Portfolio = () => {
  const today = new Date();

  return (
    <div className="Portfolio">
      <p>Find this app and more at</p>
      <a
        href="https://justin-henley.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        justin-henley.github.io
      </a>
      <p id="copyright">&copy;{today.getFullYear()} Justin Henley</p>
    </div>
  );
};

export default Portfolio;
