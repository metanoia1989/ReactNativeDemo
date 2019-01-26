/**
 * 计数器
 */

import React from "react";
import PropTypes from "prop-types";

const Content = props => {
  const { value } = props;
  return <p>Content组件的props.value: {value}</p>;
};

Content.propTypes = {
  value: PropTypes.number.isRequired
};

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ value: value + 1 })}>
          INCREMENT
        </button>
        Counter 组件的内部状态
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <Content value={value} />
      </div>
    );
  }
}
