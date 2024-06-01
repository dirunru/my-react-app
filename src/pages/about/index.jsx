import React from "react";
import { Button } from "antd";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    message: "你好啊",
    count: 0,
  };

  clickHandle = (e) => {
    const { message } = this.state;
    if (message === "1") {
      this.setState({ message: "你好" });
    } else {
      this.setState({ message: "1" });
    }
  };
  handleClick(e) {
    console.log(e, this);
    this.setState({ message: this.state.count++ });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <Button onClick={this.clickHandle.bind(this)}>测试</Button>
        <Button onClick={(e) => this.handleClick("1")}>传递参数</Button>
      </>
    );
  }
}
