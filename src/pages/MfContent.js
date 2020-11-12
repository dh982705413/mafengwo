import React, { Component } from "react";
import "../styles/mfw_content.scss";
import http from "../utils/http";
import Vcard from "../components/Vcard";
import Hcard from "../components/Hcard";
class MfContent extends Component {
  state = {
    left: [],
    right: [],
    current: 0,
    tabs: ["热门游记", "最新发表"],
  };
  async componentDidMount() {
    const { data: left } = await http.get("/list");
    const { data: right } = await http.get("/article");
    this.setState({ left, right });
  }
  async handleChange(current) {
    const { data: right } = await http.get("/article");
    this.setState({ current, right });
  }
  render() {
    const { left, right, current, tabs } = this.state;
    return (
      <div className="mfw-container">
        <div className="left">
          {left.map((item, index) => (
            <Vcard {...item} key={index} />
          ))}
        </div>
        <div className="mfw-right">
          <div className="tabs ">
            <div className="tab-left">
              {tabs.map((item, index) => (
                <div
                  key={index}
                  className={current === index ? "tab tab-checked" : "tab"}
                  onClick={this.handleChange.bind(this, index)}
                >
                  {item}
                </div>
              ))}
            </div>
            <button>写游记</button>
          </div>
          {right.map((item, index) => (
            <Hcard {...item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default MfContent;
