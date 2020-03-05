import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/ListActions";
import SubmittableInput from "../shared/SubmittableInput";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateListTitle: (title, callback) => {
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
    this.props.onUpdateListTitle(title, () => {
      callback();
      this.handleClose();
    });
  };

  render() {
    const inputForm = (
      <div>
        <SubmittableInput
          className="list-title"
          type="text"
          name="title"
          input={this.props.title}
          onSubmit={this.handleSubmit}
        />
      </div>
    );

    const titleDisplay = (
      <p className="list-title" onClick={this.handleOpen}>
        {this.props.title}
      </p>
    );

    return <div>{this.state.formVisible ? inputForm : titleDisplay}</div>;
  }
}

export default connect(null, mapDispatchToProps)(ListTitleContainer);
