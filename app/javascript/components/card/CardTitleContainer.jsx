import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/CardActions";
import SubmittableInput from "../shared/SubmittableInput";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateCardTitle: (title, callback) => {
      dispatch(actions.updateCardTitle(ownProps.cardId, title, callback));
    }
  };
};

class CardTitleContainer extends React.Component {
  handleSubmit = (title, callback) => {
    this.props.onUpdateCardTitle(title, callback);
  };

  render() {
    return (
      <SubmittableInput
        type="textarea"
        className="card-title"
        input={this.props.title}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(CardTitleContainer);
