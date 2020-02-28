import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/ListActions";
import NewListForm from "./NewListForm";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitForm: title => {
      dispatch(actions.createList(ownProps.boardId, title));
    }
  };
};

class NewListContainer extends React.Component {
  handleSubmit = title => {
    this.props.onSubmitForm(title);
  };

  render() {
    return <NewListForm onSubmit={this.handleSubmit} />;
  }
}

export default connect(null, mapDispatchToProps)(NewListContainer);
