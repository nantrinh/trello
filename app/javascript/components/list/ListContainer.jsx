import React from "react";
import { connect } from "react-redux";
import List from "./List";

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

class ListContainer extends React.Component {
  handleTitleClick = e => {};

  handleSubmit = (title, callback) => {
    this.props.onSubmitForm(title, callback);
  };

  render() {
    const lists = this.props.lists.map(list => (
      <List
        key={list.id}
        title={list.title}
        id={list.id}
        onTitleClick={this.handleTitleClick}
      />
    ));

    return (
      <div id="existing-lists" className="existing-lists">
        {lists}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ListContainer);
