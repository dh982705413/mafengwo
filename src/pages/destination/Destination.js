/*
 * @Author: your name
 * @Date: 2020-11-09 20:45:51
 * @LastEditTime: 2020-11-22 22:44:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-mafengwo\src\pages\destination\Destination.js
 */
import React, { PureComponent } from "react";
import NavBar from "../../components/destination/NavBar";
import http from "../../utils/http";
class Destination extends PureComponent {
  state = {
    seasonrecomTabs: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    seasonrecom: [],
  };

  async componentDidMount() {
    const { contents } = await http.get("/seasonrecom");
    this.setState({ seasonrecom: contents });
  }
  render() {
    const { seasonrecomTabs, seasonrecom } = this.state;
    return (
      <>
        <NavBar
          tabs={seasonrecomTabs}
          title="当季推荐"
          contents={seasonrecom}
          renderItem={(item) => RenderItem(item)}
        />
      </>
    );
  }
}

function RenderItem(item) {
  return item?.map((value) => {
    return (
      <div key={value.id} className="season-recom-wrapper">
        <img src={value.image} alt="" />
        <span>{value.city}</span>
      </div>
    );
  });
}
export default Destination;
