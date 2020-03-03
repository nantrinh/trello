import React from "react";
import Input from "../shared/Input";

class ListTitleForm extends React.Component {
  handleSubmit = input => {
    this.props.onSubmit(input);
  };

  render() {
    return (
      <div onClick={this.props.handleOpenClick}>
        <Input
          className="list-title"
          type="text"
          name="title"
          input={this.props.title}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default ListTitleForm;
