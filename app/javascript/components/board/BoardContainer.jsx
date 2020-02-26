import { connect } from "react-redux";
import Board from "./Board";
import * as actions from "../../actions/BoardActions";

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  const matchingBoard = state.boards.find(board => board.id === id);
  return {
    board: matchingBoard
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return {
    onFetchBoard: () => {
      store.dispatch(actions.fetchBoard(id)).catch(error => console.log(error)); // do we need this?
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
