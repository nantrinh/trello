import React from "react";
import Input from "../shared/Input";

class NewListForm extends React.Component {
  state = {
    visible: false
  };

  handleOpen = e => {
    this.setState({ visible: true });
  };

  handleClose = e => {
    this.setState({ visible: false });
  };

  handleSubmit = (input, callback) => {
    this.props.onSubmit(input, callback);
  };

  render() {
    return (
      <div
        id="new-list"
        className={`new-list ${this.state.visible ? "selected" : ""}`}
        onClick={this.handleOpen}
      >
        <span>Add a list...</span>
        <Input
          type="text"
          name="title"
          placeholder="Add a list..."
          onSubmit={this.handleSubmit}
          onBlur={this.handleClose}
        />

        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            // onClick would not work here because we won't have title
            // in the current state
            onClick={this.handleSubmit}
          />
          <i className="x-icon icon" onClick={this.handleClose}></i>
        </div>
      </div>
    );
  }
}

export default NewListForm;
