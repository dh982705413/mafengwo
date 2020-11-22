/*
 * @Author: your name
 * @Date: 2020-11-08 21:19:48
 * @LastEditTime: 2020-11-22 20:24:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-mafengwo\src\components\home\Vcard.js
 */
import React, { Component } from "react";
import "../../styles/components/home/vcard.scss";
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
