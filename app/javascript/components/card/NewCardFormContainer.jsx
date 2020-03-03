import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/CardActions";
import NewCardForm from "./NewCardForm";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitForm: (title, callback) => {
      dispatch(actions.updateList(ownProps.listId, title, callback));
    }
  };
};

class NewCardFormContainer extends React.Component {
  state = {
    formVisible: false
    // formVisible: true
  };

  handleOpenClick = e => {
    this.setState({ formVisible: true });
  };

  handleSubmit = (title, callback) => {
    this.props.onSubmitForm(title, callback);
  };

  render() {
    if (this.state.formVisible) {
      return (
        <NewCardForm onSubmit={this.handleSubmit} title={this.props.title} />
      );
    } else {
      return (
        <div
          className="add-card-toggle"
          data-position="bottom"
          onClick={this.handleOpenClick}
        >
          Add a card...
        </div>
      );
    }
  }
}

export default connect(null, mapDispatchToProps)(NewCardFormContainer);
