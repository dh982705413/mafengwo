import React, { PureComponent } from "react";
import MyFocus from "../../components/MyFocus";
import TipCard from "../../components/TipCard";
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
