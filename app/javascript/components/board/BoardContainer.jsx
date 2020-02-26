import { connect } from "react-redux";
import React from "react";
import Board from "./Board";

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  const matchingBoard = state.boards.find(board => board.id === id);
  return {
    board: matchingBoard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchBoard: () => {
      store.dispatch(actions.fetchBoard()).catch(error => console.log(error)); // do we need this?
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
