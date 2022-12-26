import react from "react";
import customHOC from "./customHOC";
//mistake 1 mistake in define class componanat, i have written react.components but it is react.Component
class ClassBased extends react.Component {
  constructor(props) {
    super(props);
    this.state = { name: "shree" };
  }
  render() {
    //mistake 2 mistake ye jo props aa rahe he vo hame HOC se mil rahe he 
    return <div>{this.props.name}</div>;
  }
}

export default customHOC(ClassBased);
