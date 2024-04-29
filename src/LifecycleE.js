import React, { Component } from "react";

class LifecycleE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Akash",
    };
    console.log("LifecycleE constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleE getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleE componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleE shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleE getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleE componentDidUpdate");
  }

  render() {
    console.log("LifecycleE render");
    return <div>LifecycleE</div>;
  }
}

export default LifecycleE;
