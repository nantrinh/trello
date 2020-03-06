import React, { Component } from "react";
// import { connect } from "react-redux";

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onUpdateDescription: (description, callback) => {
//       dispatch(
//         actions.updateCardDescripion(ownProps.cardId, description, callback)
//       );
//     }
//   };
// };

class CardDescriptionContainer extends Component {
  state = {
    description: this.props.description || "",
    visible: false
  };

  handleOpen = () => {
    this.setState({ visible: true });
  };

  handleClose = () => {
    this.setState({ visible: false, description: this.props.description });
  };

  handleChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleSubmit = e => {};

  render() {
    if (this.state.visible) {
      return (
        <form className="description">
          <p>Description</p>
          <textarea
            className="textarea-toggle"
            rows="1"
            autoFocus
            onChange={this.handleChange}
            value={this.state.description}
          />
          <div>
            <div className="button" value="Save" onClick={this.handleSubmit}>
              Save
            </div>
            <i className="x-icon icon" onClick={this.handleClose}></i>
          </div>
        </form>
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

export default CardDescriptionContainer;
