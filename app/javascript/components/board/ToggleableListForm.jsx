import React from "react";
import NewListForm from "./NewListForm";

class ToggleableListForm extends React.Component {
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

  render() {
    if (this.state.visible) {
      return (
        <NewListForm onChange={this.handleChange} title={this.state.title} />
      );
    } else {
      return (
        <div id="new-list" className="new-list">
          <span>Add a list...</span>
        </div>
      );
    }
  }
}

export default ToggleableListForm;
