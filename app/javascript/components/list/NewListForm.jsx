import React from "react";
import Input from "../shared/Input";

class NewListForm extends React.Component {
  state = {
    visible: false
  };

  handleOpenClick = e => {
    this.setState({ visible: true });
  };

  handleCloseClick = e => {
    e.stopPropagation();
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
        onClick={this.handleOpenClick}
      >
        <span>Add a list...</span>
        <Input
          type="text"
          name="title"
          placeholder="Add a list..."
          onSubmit={this.handleSubmit}
        />

        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onClick={this.handleSubmit}
          />
          <i className="x-icon icon" onClick={this.handleCloseClick}></i>
        </div>
      </div>
    );
  }
}

export default NewListForm;
