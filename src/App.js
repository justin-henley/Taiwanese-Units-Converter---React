import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

// TODO deal with swap button and font awesome icon won't import
// TODO Add Mandarin for all units
// TODO Add a language option to switch to Mandarin?
// TODO Mobile-first CSS with mixins for viewport sizes
// TODO Mobile can't hover so buttons don't animate/change color. Use a mixin to change behavior based on size to guess at mobile/tablet
// TODO Add better comments
// TODO Clean up any commented-out code or old imports
// TODO add readme

function App() {
  const appName = "Taiwanese Unit Conversion Calculator";
  return (
    <Div>
      <Header appName={appName} />
      <Content />
      <Footer />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  max-width: 600px;
  /* margin: auto; */

  border: 1px solid darkslategray;
  border-radius: 6px;

  @media only screen and (min-width: 700px) {
    height: 95vh;
    max-height: 600px;
  }
`;

export default App;
