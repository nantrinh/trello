import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/ListActions";
import ListTitleForm from "./ListTitleForm";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitForm: (title, callback) => {
      dispatch(actions.updateList(ownProps.listId, title, callback));
    }
  };
};

class ListTitleContainer extends React.Component {
  state = {
    formVisible: false
  };

  handleOpenClick = e => {
    this.setState({ formVisible: true });
  };

  handleSubmit = (title, callback) => {
    this.props.onSubmitForm(title, callback);
  };

  render() {
    if (this.state.formVisible) {
      return (
        <ListTitleForm onSubmit={this.handleSubmit} title={this.props.title} />
      );
    } else {
      return (
        <p className="list-title" onClick={this.handleOpenClick}>
          {this.props.title}
        </p>
      );
    }
  }
}

export default connect(null, mapDispatchToProps)(ListTitleContainer);
