import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/BoardActions";

const mapDispatchToProps = (dispatch, ownProps) => {
  const board_id = Number(ownProps.match.params.id);
  return {
    onSubmitForm: () => {
      dispatch(actions.createList(board_id));
    }
  };
};

class NewListContainer extends React.Component {
  componentDidMount() {
    this.props.onFetchBoard();
  }

  render() {
    if (this.props.board) {
      return <Board board={this.props.board} />;
    }
    return null;
  }
}

export default connect(null, mapDispatchToProps)(NewListContainer);
