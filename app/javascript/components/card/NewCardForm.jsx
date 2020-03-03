import React from "react";

class NewCardForm extends React.Component {
  handleSubmit = (title, callback) => {
    this.props.onSubmitForm(title, callback);
  };

  render() {
    console.log(this.props.active);
    return (
      <div
        className={
          this.props.active
            ? "add-dropdown add-bottom active-card"
            : "add-dropdown add-bottom"
        }
      >
        <div className="card">
          <div className="card-info"></div>
          <input type="textarea" name="add-card" />
          <div className="members"></div>
        </div>
        <a className="button">Add</a>
        <i className="x-icon icon"></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
    );
  }
}

export default NewCardForm;
