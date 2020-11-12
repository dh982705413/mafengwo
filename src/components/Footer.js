import React, { Component } from "react";
import "../styles/components/footer.scss";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-container">
        <div className="footer-title">
          <span>旅游之前,先上马蜂窝</span>
          <div className="footer-icons">
            <i className="iconfont icon-weixin1"></i>
            <i className="iconfont icon-11qq"></i>
            <i className="iconfont icon-weibo"></i>
          </div>
          <ul className="footer-friend">
            <div>
              <li>友情链接:</li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">Vue</a>
              </li>
              <li>
                <a href="#">Webpack</a>
              </li>
              <li>
                <a href="#">Sass</a>
              </li>
              <li>
                <a href="#">Flutter</a>
              </li>
            </div>
            <div>
              <li>特别赞助:</li>
              <li>
                <a href="#">React Native</a>
              </li>
              <li>
                <a href="#">Weex</a>
              </li>
              <li>
                <a href="#">Uniapp</a>
              </li>
              <li>
                <a href="#">Dart</a>
              </li>
              <li>
                <a href="#">TypeScript</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
