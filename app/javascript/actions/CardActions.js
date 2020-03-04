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

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function fetchCard(id) {
  return function(dispatch) {
    apiClient.getCard(id, card => dispatch(fetchCardSuccess(card)));
  };
}

// export function updateListSuccess(list) {
//   return { type: types.UPDATE_LIST_SUCCESS, list: list };
// }

// export function updateList(listId, title, callback) {
//   const payload = {
//     list: {
//       title
//     }
//   };

//   return function(dispatch) {
//     // NOTE: newList => {...} is a callback
//     apiClient.updateList(listId, payload, updatedList => {
//       dispatch(updateListSuccess(updatedList));

//       if (callback) {
//         callback();
//       }
//     });
//   };
// }
