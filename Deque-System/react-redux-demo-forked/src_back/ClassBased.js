import React, { PureComponent } from "react";

class ClassBased extends PureComponent {
  render() {
    return (
      <center>
        <h1>0</h1>
        <button style={{ marginRight: "10px" }}>increment</button>
        <button>decrement</button>
      </center>
    );
  }
}

export default ClassBased;
