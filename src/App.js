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
    <div className="App">
      <Header appName={appName} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
