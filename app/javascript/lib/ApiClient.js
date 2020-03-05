import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoards: function(callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoard: function(id, callback) {
    return axios
      .get(`/api/boards/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList: function(payload, callback) {
    return axios
      .post(routes.CREATE_LIST_URL, payload)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateList: function(listId, payload, callback) {
    return axios
      .put(`/api/lists/${listId}`, payload)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createCard: function(payload, callback) {
    return axios
      .post(routes.CREATE_CARD_URL, payload)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getCard: function(id, callback) {
    return axios
      .get(`/api/cards/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  }
};

export default apiClient;
