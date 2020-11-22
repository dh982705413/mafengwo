/*
 * @Author: your name
 * @Date: 2020-11-09 19:51:52
 * @LastEditTime: 2020-11-22 20:24:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-mafengwo\src\components\home\BackToTop.js
 */
import React, { Component } from "react";
import "../../styles/components/home/back_top.scss";
class BackToTop extends Component {
  state = {
    show: false,
  };
  handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 100) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };
  goBack = () => {
    window.scrollTo(0, 0);
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    const { show } = this.state;
    return (
      <div
        className="back-top"
        style={{ display: show ? "block" : "none" }}
        onClick={this.goBack}
      >
        返回顶部
      </div>
    );
  }
}

export default BackToTop;
