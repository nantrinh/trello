import React from "react";

class Input extends React.Component {
  state = {
    input: this.props.input || "",
    visible: false
  };

  resetState = () => {
    this.setState({
      input: "",
      visible: false
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
      e.target.blur();
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <input
        className={this.props.className || ""}
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.state.input}
        onChange={this.handleChange}
        onBlur={this.handleSubmit}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default Input;
