/*
 * @Author: your name
 * @Date: 2020-11-09 20:26:13
 * @LastEditTime: 2020-11-22 20:26:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-mafengwo\src\pages\home\Home.js
 */
import React, { PureComponent } from "react";
import MyFocus from "../../components/home/MyFocus";
import TipCard from "../../components/home/TipCard";
import MfContent from "../../pages/MfContent";
class Home extends PureComponent {
  state = {};
  render() {
    return (
      <>
        <MyFocus />
        <TipCard />
        <MfContent />
      </>
    );
  }
}

export default Home;
