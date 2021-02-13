import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Bio from "./components/pages/Bio";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Bio} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
