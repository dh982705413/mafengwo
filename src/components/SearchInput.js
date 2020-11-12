import React, { Component } from "react";
import "../styles/components/search_input.scss";
class SearchInput extends Component {
  state = {
    options: [
      { title: "全部", id: "all" },
      { title: "酒店", id: "jd" },
      { title: "目的地", id: "destination" },
      { title: "去旅行", id: "travel" },
      { title: "机票", id: "ticket" },
    ],
    current: 0,
  };
  handleChange(index) {
    this.setState({
      current: index,
    });
  }
  render() {
    const { options, current } = this.state;
    return (
      <div className="search-input-container">
        <div className="options">
          {options.map((item, index) => {
            return (
              <div
                key={item.id}
                className="options-item"
                onClick={this.handleChange.bind(this, index)}
              >
                <div
                  className={index === current ? "radio checked" : "radio"}
                ></div>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="input-wrap">
          <input type="text" placeholder="搜索目的地/攻略/酒店/旅行特价" />
          <button>搜索</button>
        </div>
      </div>
    );
  }
}

export default SearchInput;
