import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { color, children } = props;
  return <button style={{ background: color }}>{children}</button>;
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
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

const MessageList = () => {
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
};

export default MessageList;
