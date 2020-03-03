import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

// use the board id to filter rthe current state and get the currents lists - which already won't have the card info

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function createList(board_id, title, callback) {
  const payload = {
    board_id,
    list: {
      title
    }
  };

  return function(dispatch) {
    // NOTE: newList => {...} is a callback
    apiClient.createList(payload, newList => {
      dispatch(createListSuccess(newList));

      if (callback) {
        callback();
      }
    });
  };
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list: list };
}

export function updateList(listId, title, callback) {
  const payload = {
    list: {
      title
    }
  };

  return function(dispatch) {
    // NOTE: newList => {...} is a callback
    apiClient.updateList(listId, payload, updatedList => {
      dispatch(updateListSuccess(updatedList));

      if (callback) {
        callback();
      }
    });
  };
}
