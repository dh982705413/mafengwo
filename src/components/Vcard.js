import React, { Component } from "react";
import "../styles/components/vcard.scss";
import LazyLoad from "react-lazyload";

class Vcard extends Component {
  render() {
    const { title, sub, image } = this.props;
    return (
      <div className="vcard-container">
        <div className="header">
          <span className="left">{title}</span>
          <span className="right">{sub}</span>
        </div>
        <LazyLoad>
          <img alt="" src={image} />
        </LazyLoad>
      </div>
    );
  }
}

export default Vcard;
