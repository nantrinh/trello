import React from "react";
import { connect } from "react-redux";
import List from "./List";

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

class ListContainer extends React.Component {
  // changes based on which list is being added to
  state = {
    activeListId: null
  };

  handleActiveList = listId => {
    this.setState({ activeListId: listId });
  };

  handleInactiveList = listId => {
    this.setState({ activeListId: null });
  };

  handleSubmit = (title, callback) => {
    this.props.onSubmitForm(title, callback);
  };

  render() {
    const lists = this.props.lists.map(list => (
      <List
        key={list.id}
        title={list.title}
        id={list.id}
        onActiveList={this.handleActiveList}
        onInactiveList={this.handleInactiveList}
        onTitleClick={this.handleTitleClick}
        active={this.state.activeListId === list.id}
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
