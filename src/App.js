import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

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
