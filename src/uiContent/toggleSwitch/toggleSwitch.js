import React, { Component } from "react";
import "./toggleSwitch.css";

class Toggle extends Component {
  constructor() {
    super();
    this.state = { isOn: true };
  }
  handleButton = () => {
    this.setState({ isOn: !this.state.isOn });
  };
  render() {
    return (
      <>
        <button
          onClick={this.handleButton}
          className={this.state.isOn ? "switchon" : "switchoff"}>
          {this.state.isOn ? <h1>SWITCH OFF</h1> : <h1>SWITCH ON</h1>}
        </button>
        <h1 className={this.state.isOn ? "textOn" : "textOff"}>
          {this.state.isOn ? <h1>TURNED ON</h1> : <h1>TURNED OFF</h1>}
        </h1>
      </>
    );
  }
}
export default Toggle;
