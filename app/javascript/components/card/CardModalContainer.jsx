import React, { Component } from "react";
import { connect } from "react-redux";

import CardModal from "./CardModal";
import * as actions from "../../actions/CardActions";

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  const matchingCard = state.cards.find(card => card.id === id);
  const list = state.lists.find(list => list.id === matchingCard.list_id);

  if (list) {
    return {
      card: matchingCard,
      listTitle: list.title
    };
  } else {
    return {
      card: null,
      listTitle: ""
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return {
    onFetchCard: () => {
      dispatch(actions.fetchCard(id));
    }
  };
};

class CardModalContainer extends Component {
  componentDidMount() {
    this.props.onFetchCard();
  }

  render() {
    if (this.props.card && this.props.listTitle) {
      return (
        <CardModal card={this.props.card} listTitle={this.props.listTitle} />
      );
    }
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardModalContainer);
