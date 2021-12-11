import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Portfolio from "./pages/Portfolio/Portfolio.js";
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.css';
import "./App.css";

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <Router>
      <div className="container-flex col-12 p-0 m-0">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
