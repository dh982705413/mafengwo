import React, { Component } from "react";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { renderRoutes } from "react-router-config";
import { HashRouter as Router } from "react-router-dom";
import routers from "../route/route";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Header />
          {renderRoutes(routers)}
          <Footer />
          <BackToTop />
        </Router>
      </div>
    );
  }
}

export default App;
