import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Contact = () => {
  const icons = {
    style: {
      padding: "0.125em",
      fontSize: "2em",
    },
    color: {
      github: "#6cc644",
      linkedin: "#2867b2",
      twitter: "#1da1f2",
    },
  };

  return (
    <ContactDiv>
      <H1>Find me at:</H1>
      <Links>
        <LinkButton
          href="https://github.com/justin-henley"
          hoverColor={icons.color.github}
        >
          <FaGithub style={icons.style} />
        </LinkButton>
        <LinkButton
          href="https://www.linkedin.com/in/justin-henley/"
          hoverColor={icons.color.linkedin}
        >
          <FaLinkedin style={icons.style} />
        </LinkButton>
        <LinkButton
          href="https://twitter.com/jah_dev"
          hoverColor={icons.color.twitter}
        >
          <FaTwitter style={icons.style} />
        </LinkButton>
      </Links>
    </ContactDiv>
  );
};

const ContactDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  background-color: darkslategray;
  color: white;
  border-radius: 5px;
  margin: 0 0 0 1px;
  border-radius: 5px 0 5px 0;
`;

const H1 = styled.h1`
  font-size: 1em;
  font-weight: normal;
`;

const Links = styled.div`
  margin: 0px;
`;

const LinkButton = styled.a.attrs((props) => ({
  target: "blank",
  rel: "noopener noreferrer",
  href: props.href,
}))`
  display: inline-block;
  text-decoration: none;
  color: darkslategray;
  background-color: white;
  border-radius: 10px 0px 10px 0px;
  transition: all 0.2s ease-in-out;
  font-size: 1em
  padding: 0;
  margin: 5px;

  &:hover {
    color: ${(props) => props.hoverColor};
    transform: scale(1.2);
  }
`;

export default Contact;
