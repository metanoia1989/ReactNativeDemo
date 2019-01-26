import React from "react";
import ReactDOM from "react-dom";

import Counter from "./Components/Counter";
import MessageList from "./Components/MessageList";
import MessageListContext from "./Components/MessageListContext";
import runCounter from "./Store/counter";

class App extends React.Component {
  componentDidMount() {
    runCounter();
  }

  render() {
    return (
      <div>
        <Counter />
        <hr />
        <MessageList />
        <hr />
        <MessageListContext />
        <hr />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
