import React, { Component } from "react";
import Time from "./Time";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      timeMs: 0
    };
  }
  start = () => {
    if (this.state.isRunning) {
        clearInterval(this.timerID);
        this.setState({ isRunning: false });
      } else {
        const startTime = Date.now() - this.state.timeMs;
        this.timerID = setInterval(() => {
          this.setState({ timeMs: Date.now() - startTime , isRunning: true});
        }, 100);
    }
  };

  reset = () => {
    clearInterval(this.timerID);
    this.setState({ isRunning: false, timeMs: 0 });
  };

  formatTime(t) {
    return (t / 1000).toFixed(1);
  }

  render() {
    return (
      <div className="TimerAfficher">
        <Time ms={this.state.timeMs} />
        <button className="btnStart" type="button" onClick={this.start}>
          {this.state.isRunning ? "Pause" : "Start"}
        </button>
        <button className="btnReset" value="Reset" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Timer;
