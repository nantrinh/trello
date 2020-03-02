import React from "react";
import { connect } from "react-redux";
import List from "./List";
import * as actions from "../../actions/BoardActions";

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitForm: (title, callback) => {
      dispatch(actions.updateList(ownProps.boardId, title, callback));
    }
  };
};

class ListContainer extends React.Component {
  // state = {
  //   editing: false
  // };

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
        editing={this.state.editing}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
