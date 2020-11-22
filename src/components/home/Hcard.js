import React, { Component } from "react";
import "../../styles/components/home/hcard.scss";
import LazyLoad from "react-lazyload";

class Hcard extends Component {
  render() {
    const { image, avatar, title, desc, eyes, num, city, name } = this.props;
    return (
      <div className="hcard-container">
        <LazyLoad>
          <img alt="" src={image} />
        </LazyLoad>
        <div className="right">
          <h3>{title}</h3>
          <span className="desc">{desc}</span>
          <div className="bottom-info">
            <span className="article-info">
              <i className="iconfont icon-location"></i>
              <span className="city">{city}， by</span>
              <img src={avatar} alt="" />
              <span className="name"> {name}</span>
              <i className="iconfont icon-eyes"></i>
              {eyes}
            </span>
            <span className="ding-num">{num}</span>
            <span className="ding">顶</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Hcard;
