/*
 * @Author: your name
 * @Date: 2020-11-22 20:28:27
 * @LastEditTime: 2020-11-22 21:34:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-mafengwo\src\components\destination\NavBar.js
 */
import React, { Component } from "react";
import "../../styles/components/destination/navbar.scss";
class NavBar extends Component {
  state = {
    current: 0,
  };
  changeCurrent(index) {
    this.setState({ current: index });
  }

  render() {
    const { current } = this.state;
    const { tabs, contents, renderItem, title } = this.props;
    const content = contents[current];
    return (
      <div className="navbar-container">
        <h2 className="navbar-title">{title}</h2>
        <ul className="navbar-tabs">
          {tabs.map((item, index) => (
            <>
              <li
                key={index}
                className={current === index ? "active" : ""}
                onMouseEnter={this.changeCurrent.bind(this, index)}
              >
                {item}
              </li>
              {index >= tabs.length - 1 ? "" : <li className="divide"></li>}
            </>
          ))}
        </ul>
        <div className="navbar-content">{renderItem(content)}</div>
      </div>
    );
  }
}

export default NavBar;
