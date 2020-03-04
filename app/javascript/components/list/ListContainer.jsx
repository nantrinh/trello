import React from "react";
import { connect } from "react-redux";
import List from "./List";
import * as actions from "../../actions/CardActions";

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitNewCardForm: (listId, title, callback) => {
      dispatch(actions.createCard(listId, title, callback));
    }
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

  handleSubmit = (id, title, callback) => {
    this.props.onSubmitNewCardForm(id, title, callback);
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
        onSubmit={this.handleSubmit}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
