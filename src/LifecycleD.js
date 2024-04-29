import React, { Component } from "react";
import LifecycleE from "./LifecycleE";

class LifecycleD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Akash",
    };
    console.log("LifecycleD constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleD getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleD componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleD shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleD getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleD componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Codevolution",
    });
  };

  render() {
    console.log("LifecycleD render");
    return (
      <div>
        <button onClick={this.changeState}>Change state</button>
        LifecycleD
        <LifecycleE />
      </div>
    );
  }
}

export default LifecycleD;
