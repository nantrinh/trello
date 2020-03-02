import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/ListActions";
import ListForm from "./NewListForm";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitForm: (title, callback) => {
      dispatch(actions.createList(ownProps.boardId, title, callback));
    }
  };
};

class NewListContainer extends React.Component {
  handleSubmit = (title, callback) => {
    this.props.onSubmitForm(title, callback);
  };

  render() {
    return <ListForm onSubmit={this.handleSubmit} />;
  }
}

export default connect(null, mapDispatchToProps)(NewListContainer);
