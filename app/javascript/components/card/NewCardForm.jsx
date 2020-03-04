import React from "react";

class NewCardForm extends React.Component {
  state = {
    title: ""
  };

  resetState = () => {
    this.setState({
      title: ""
    });
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

  handleSubmit = () => {
    this.props.onSubmit(this.state.title, this.handleClose);
  };

  handleClose = e => {
    this.props.onCloseClick();
    this.resetState();
  };

  render() {
    return (
      <div
        className={`add-dropdown add-bottom ${
          this.props.active ? "active-card" : ""
        }`}
      >
        <div className="card">
          <div className="card-info"></div>
          <input
            type="textarea"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <div className="members"></div>
        </div>
        <a className="button" onClick={this.handleSubmit}>
          Add
        </a>
        <i className="x-icon icon" onClick={this.handleClose}></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
    );
  }
}

export default NewCardForm;
