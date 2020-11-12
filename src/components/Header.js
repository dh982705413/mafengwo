import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/components/header.scss";
class Header extends Component {
  state = {
    list: [
      { path: "/", title: "首页" },
      { path: "/destination", title: "目的地" },
      { path: "/strategy", title: "旅游攻略" },
      { path: "/travel", title: "去旅行" },
      { path: "/ticket", title: "机票火车票" },
      { path: "/hotel", title: "订酒店" },
      { path: "/hub", title: "社区" },
      { path: "/app", title: "APP" },
    ],
    current: 0,
  };
  handleChange(index) {
    this.setState({
      current: index,
    });
  }
  render() {
    const { list, current } = this.state;
    return (
      <div className="header-container">
        <div className="logo">Logo</div>
        <ul>
          {list.map((item, index) => (
            <li
              key={index}
              className={index === current ? "checked" : ""}
              onClick={this.handleChange.bind(this, index)}
            >
              <Link to={item.path} className="link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="info">
          <i className="iconfont icon-weibo" />
          <i className="iconfont icon-11qq" />
          <i className="iconfont icon-weixin1" />
          <span>登录</span>
          <span className="line">|</span>
          <span>注册</span>
        </div>
      </div>
    );
  }
}

export default Header;
