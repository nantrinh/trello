import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/ListActions";
import Input from "../shared/Input";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitForm: (title, callback) => {
      dispatch(actions.updateListTitle(ownProps.listId, title, callback));
    }
  };
};

class ListTitleContainer extends React.Component {
  state = {
    formVisible: false
  };

  handleOpen = e => {
    this.setState({ formVisible: true });
  };

  handleClose = e => {
    this.setState({ formVisible: false });
  };

  handleSubmit = (title, callback) => {
    this.props.onSubmitForm(title, callback);
    this.handleClose();
  };

  render() {
    if (this.state.formVisible) {
      return (
        //        <ListTitleForm onSubmit={this.handleSubmit} title={this.props.title} />
        //        <div onClick={this.handleOpenClick}>
        <div>
          <Input
            className="list-title"
            type="text"
            name="title"
            input={this.props.title}
            onSubmit={this.handleSubmit}
          />
        </div>
      );
    } else {
      return (
        <p className="list-title" onClick={this.handleOpen}>
          {this.props.title}
        </p>
      );
    }
  }
}

export default connect(null, mapDispatchToProps)(ListTitleContainer);
