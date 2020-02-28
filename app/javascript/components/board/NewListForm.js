import React from "react";

const NewListForm = props => {
  return (
    <div id="new-list" className="new-list selected">
      <input
        type="text"
        placeholder="Add a list..."
        value={props.value}
        onChange={e => props.onChange(e)}
      />
      <div>
        <input type="submit" className="button" value="Save" />
        <i className="x-icon icon"></i>
      </div>
    </div>
  );
};

export default NewListForm;
