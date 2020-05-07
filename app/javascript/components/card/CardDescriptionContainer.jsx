import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/CardActions";
import CardDescriptionForm from "./CardDescriptionForm";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateDescription: (description, callback) => {
      dispatch(
        actions.updateCardDescription(ownProps.cardId, description, callback)
      );
    }
  };
};

class CardDescriptionContainer extends Component {
  state = {
    visible: false
  };

  handleOpen = () => {
    this.setState({ visible: true });
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  handleSubmit = description => {
    this.props.onUpdateDescription(description, this.handleClose);
  };

  render() {
    if (this.state.visible) {
      return (
        <CardDescriptionForm
          cardId={this.props.cardId}
          description={this.props.description}
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
        />
      );
    } else {
      return (
        <form className="description">
          <p>Description</p>
          <span
            id="description-edit"
            className="link"
            onClick={this.handleOpen}
          >
            Edit
          </span>
          <p className="textarea-overlay" onClick={this.handleOpen}>
            {this.props.description}
          </p>
          <p id="description-edit-options" className="hidden">
            You have unsaved edits on this field.{" "}
            <span className="link">View edits</span> -{" "}
            <span className="link">Discard</span>
          </p>
        </form>
      );
    }
  }
}

export default connect(null, mapDispatchToProps)(CardDescriptionContainer);
