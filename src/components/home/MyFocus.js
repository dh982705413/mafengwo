/*
 * @Author: your name
 * @Date: 2020-11-08 18:50:00
 * @LastEditTime: 2020-11-22 20:24:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-mafengwo\src\components\home\MyFocus.js
 */
import React, { Component } from "react";
import http from "../../utils/http";
import { Carousel } from "react-responsive-carousel";
import "../../styles/components/home/myfocus.scss";
import SearchInput from "../../components/SearchInput";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
class MyFocus extends Component {
  state = {
    banner: [],
  };
  async componentWillMount() {
    const { data } = await http.get("/banner");
    this.setState({
      banner: data,
    });
  }
  render() {
    const { banner } = this.state;
    return (
      <div className="myfocus">
        <div className="search">
          <SearchInput />
        </div>
        <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
        >
          {banner.map((item) => (
            <div key={item.id} className="container">
              <img src={item.image} alt="" className="img-container" />
              <div className="img-info">
                <span>
                  <span className="number">{item.day}</span>/Nov.2020
                </span>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default MyFocus;
