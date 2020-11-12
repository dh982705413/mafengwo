import React, { Component } from "react";
import "../styles/components/tip_card.scss";
function Card(props) {
  return (
    <div className="card-container">
      <div className="card-left">
        <span className="title">{props.title}</span>
        <span className="sub">{props.sub}</span>
      </div>
      <i className={props.icon}></i>
    </div>
  );
}
class TipCard extends Component {
  state = {
    tips: [
      {
        title: "自由行",
        sub: "旅行就要更自在",
        icon: "iconfont icon-ziyuan13",
      },
      {
        title: "跟团游",
        sub: "旅行就要更自在",
        icon: "iconfont icon-gentuanyou",
      },
      {
        title: "当地游",
        sub: "旅行就要更自在",
        icon: "iconfont icon-dangdilvyou",
      },
      { title: "机票", sub: "旅行就要更自在", icon: "iconfont icon-jipiao" },
      { title: "订酒店", sub: "旅行就要更自在", icon: "iconfont icon-jiudian" },
      { title: "签证", sub: "旅行就要更自在", icon: "iconfont icon-qianzheng" },
      { title: "邮轮", sub: "旅行就要更自在", icon: "iconfont icon-youlun" },
    ],
  };
  render() {
    return (
      <div className="card-list">
        {this.state.tips.map((item) => (
          <Card {...item} key={item.icon} />
        ))}
      </div>
    );
  }
}

export default TipCard;
