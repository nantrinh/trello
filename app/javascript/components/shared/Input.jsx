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
    const value = e.target.value;

    this.setState({
      input: value
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  handleSubmit = e => {
    // if blur event - check if it is blurrable.
    e.preventDefault();
    this.props.onSubmit(this.state.input, this.resetState);
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
