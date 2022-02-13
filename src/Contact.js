/* import styled, { css } from "styled-components"; */
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="social">
      <a
        className="socialLink"
        href="http://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="socialIcon" />
      </a>
      <a
        className="socialLink"
        href="https://www.linkedin.com/in/justin-henley/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="socialIcon" />
      </a>
      <a
        className="socialLink"
        href="https://github.com/justin-henley"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="socialIcon" />
      </a>
    </div>
  );
};

export default Contact;
