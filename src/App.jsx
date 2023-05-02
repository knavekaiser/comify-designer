import "./App.scss";

import Header from "components/ui/header";
import Home from "./Views";
import Footer from "components/ui/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
