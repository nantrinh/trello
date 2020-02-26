import React from "react";
import { connect } from "react-redux";
import List from "./List";
import * as actions from "../../actions/BoardActions";

const mapStateToProps = (state, ownProps) => {
  const boardId = Number(ownProps.boardId);
  const matchingLists = state.lists.filter(list => list.board_id === boardId);
  debugger;

  return {
    lists: matchingLists
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const boardId = Number(ownProps.match.params.id);
//   return {
//     onFetchBoard: () => {
//       dispatch(actions.fetchBoard(id)).catch(error => console.log(error)); // do we need this?
//     }
//   };
// };

class ListContainer extends React.Component {
  render() {
    const lists = this.props.lists.map(list => (
      <List key={list.id} title={list.title} id={list.id} />
    ));

    return <div>{lists}</div>;
  }
}

export default connect(mapStateToProps, null)(ListContainer);
