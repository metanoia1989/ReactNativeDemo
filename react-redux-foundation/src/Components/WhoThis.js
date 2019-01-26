import React from "react";

const suffix = "被调用，this 指向：";

export default class WhoThis extends React.Component {
  componentDidMount() {
    console.log(`componentDidMount${suffix}`, this);
  }

  componentWillReceiveProps() {
    console.log(`componentWillReceiveProps${suffix}`, this);
  }

  shouldComponentUpdate() {
    console.log(`shouldComponentUpdate${suffix}`, this);
  }

  componentWillUnMount() {
    console.log(`componentWillUnMount${suffix}`, this);
  }

  handler = () => {
    console.log(`handler${suffix}`, this);
  };

  render() {
    console.log(`handler${suffix}`, this);
    window.handler = this.handler;
    window.handler();
    return (
      <div>
        <h1 onClick={this.handler}>Hello World</h1>
      </div>
    );
  }
}
