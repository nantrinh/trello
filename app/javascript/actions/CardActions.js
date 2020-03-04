import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card: card };
}

export function createCard(list_id, title, callback) {
  const payload = {
    list_id,
    card: {
      title
    }
  };

  return function(dispatch) {
    // NOTE: newList => {...} is a callback
    apiClient.createCard(payload, newCard => {
      dispatch(createCardSuccess(newCard));

      if (callback) {
        callback();
      }
    });
  };
}
