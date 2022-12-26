import react from "react";
//mistake 2 mistake forget to write ChildComponenent in Camelcase : I wrote childComponenent
const customHOC = (ChildComponenent) => {
//mistake 3 mistake in define class componanat, i have written react.components but it is react.Component
  class customHOCClass extends react.Component {
    constructor(props) {
      super(props);
      //mistake 4 mistake forget to write super(props)
      this.state = { name: "shree" };
    }

    render() {
      return <ChildComponenent name={this.state.name} />;
    }
  }
  return customHOCClass;
};

export default customHOC;
