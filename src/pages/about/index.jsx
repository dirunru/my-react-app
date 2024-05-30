import React from "react";
import { Button } from "antd";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    message: "你好",
  };

  render() {
    const clickHandle = (e) => {
      console.log(2);
    };
    return (
      <>
        <h1>{this.state.message}</h1>
        <Button onClick={clickHandle}>测试</Button>
      </>
    );
  }
}
export default About;
