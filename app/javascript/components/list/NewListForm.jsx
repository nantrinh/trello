import React from "react";

class NewListForm extends React.Component {
  state = {
    title: "",
    visible: false
  };

  handleToggleVisibleForm = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleOpenClick = e => {
    this.setState({ visible: true });
  };

  handleCloseClick = e => {
    e.stopPropagation();
    this.setState({ visible: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.title);
  };

  handleKeyPressed = e => {
    debugger;
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  };

  render() {
    return (
      <div
        id="new-list"
        className={`new-list ${this.state.visible ? "selected" : ""}`}
        onClick={this.handleOpenClick}
      >
        <span>Add a list...</span>
        <input
          type="text"
          name="title"
          placeholder="Add a list..."
          value={this.state.title}
          onChange={e => this.handleChange(e)}
          onKeyPress={this.handleKeyPressed}
        />
        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onSubmit={this.handleSubmit}
          />
          <i className="x-icon icon" onClick={this.handleCloseClick}></i>
        </div>
      </div>
    );
  }
}

export default NewListForm;
