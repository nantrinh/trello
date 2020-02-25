import React from "react";
import Board from "./Board";

class BoardContainer extends React.Component {
  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchBoard());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  board = () => {
    const store = this.context.store;
    return store.getState().board;
  };

  render() {
    <Board board={board} />;
  }
}

export default BoardContainer;

// use 'connect' syntax instead of componentDidMount & componentWillUnmount
