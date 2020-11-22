/*
 * @Author: your name
 * @Date: 2020-11-08 18:08:33
 * @LastEditTime: 2020-11-22 20:25:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-mafengwo\src\pages\App.js
 */
import React, { Component } from "react";
import BackToTop from "../components/home/BackToTop";
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
