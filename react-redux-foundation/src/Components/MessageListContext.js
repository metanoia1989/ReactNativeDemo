import React, { Component } from "react";
import PropTypes from "prop-types";

const Button = (props, context) => {
  const { children } = props;
  const { color } = context;
  return <button style={{ background: color }}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired
};

Button.contextTypes = {
  color: PropTypes.string.isRequired
};

const Message = props => {
  const { color, text } = props;
  return (
    <li>
      <Button color={color}>{text}</Button>
    </li>
  );
};

Message.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

class MessageListContext extends Component {
  getChildContext() {
    return {
      color: "gray"
    };
  }

  render() {
    const color = "yellow";
    const messages = [{ text: "Hello React" }, { text: "Hello Redux" }];

    const children = messages.map((message, key) => (
      <Message key={key} text={message.text} color={color} />
    ));

    return (
      <div>
        <p>通过props将color逐层传递给里面的Button组件</p>
        <ul>{children}</ul>
      </div>
    );
  }
}

MessageListContext.childContextTypes = {
  color: PropTypes.string.isRequired
};

export default MessageListContext;
