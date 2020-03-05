import React from "react";

class NewListForm extends React.Component {
  state = {
    title: "",
    visible: false
  };

  resetState = () => {
    this.setState({
      title: "",
      visible: false
    });
  };

  handleOpen = e => {
    this.setState({ visible: true });
  };

  handleClose = e => {
    e.stopPropagation();
    this.resetState();
  };

  handleSubmit = e => {
    this.props.onSubmit(this.state.title, this.resetState);
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };

  render() {
    return (
      <div
        id="new-list"
        className={`new-list ${this.state.visible ? "selected" : ""}`}
      >
        <span onClick={this.handleOpen}>Add a list...</span>
        <input
          type="text"
          name="title"
          placeholder="Add a list..."
          value={this.state.title}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onClick={this.handleSubmit}
          />
          <i className="x-icon icon" onClick={this.handleClose}></i>
        </div>
      </div>
    );
  }
}

export default NewListForm;
