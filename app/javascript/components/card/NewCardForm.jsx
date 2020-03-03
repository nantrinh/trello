import React from "react";
import Input from "../shared/Input";

const NewCardForm = () => {
  const handleSubmit = input => {
    this.props.onSubmit(input);
  };

  return (
    <div className="add-dropdown-active add-bottom active-card">
      <div className="card">
        <div className="card-info"></div>
        <Input type="textarea" name="add-card" onSubmit={handleSubmit} />
        <div className="members"></div>
      </div>
      <a className="button">Add</a>
      <i className="x-icon icon"></i>
      <div className="add-options">
        <span>...</span>
      </div>
    </div>
  );
};

export default NewCardForm;
