import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="Contact">
      <p>Find me at:</p>
      <div className="social">
        <a
          className="socialLink"
          id="githubLink"
          href="https://github.com/justin-henley"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="socialIcon" />
        </a>

        <a
          className="socialLink"
          id="linkedinLink"
          href="https://www.linkedin.com/in/justin-henley/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="socialIcon" />
        </a>
        <a
          className="socialLink"
          id="twitterLink"
          href="http://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="socialIcon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
