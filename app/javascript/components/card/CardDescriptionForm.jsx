import React, { Component } from "react";

class CardDescriptionForm extends Component {
  state = {
    description: this.props.description || ""
  };

  handleClose = () => {
    this.setState({ description: this.props.description });
    this.props.onClose();
  };

  handleChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleSubmit = description => {
    this.props.onSubmit(this.state.description);
  };

  render() {
    return (
      <form className="description">
        <p>Description</p>
        <textarea
          className="textarea-toggle"
          rows="1"
          autoFocus
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
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
  }
}

export default CardDescriptionForm;
