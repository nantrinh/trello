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
    const property = e.target.name;
    const value = e.target.value;

    this.setState({
      [property]: value
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

  render() {
    return (
      <div
        id="new-list"
        className={`new-list ${this.state.visible ? "selected" : ""}`}
        onClick={e => this.handleOpenClick(e)}
      >
        <span>Add a list...</span>
        <input
          type="text"
          name="title"
          placeholder="Add a list..."
          value={this.state.title}
          onChange={e => this.handleChange(e)}
        />
        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onClick={e => this.handleSubmit(e)}
          />
          <i
            className="x-icon icon"
            onClick={e => this.handleCloseClick(e)}
          ></i>
        </div>
      </div>
    );
  }
}

export default NewListForm;
