import { connect } from "react-redux";
import React from "react";
import Board from "./Board";

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  const matchingBoards = state.boards.filter(board => board.id === id);
  return {
    board: matchingBoards[0]
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
