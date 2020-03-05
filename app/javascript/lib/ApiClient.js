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
      .get(routes.BOARD_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios
      .post(routes.BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoard: function(id, callback) {
    return axios
      .get(`${routes.BOARD_URL}/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList: function(payload, callback) {
    return axios
      .post(routes.LIST_URL, payload)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateList: function(payload, id, callback) {
    return axios
      .put(`${routes.LIST_URL}/${id}`, payload)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createCard: function(payload, callback) {
    return axios
      .post(routes.CARD_URL, payload)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getCard: function(id, callback) {
    return axios
      .get(`${routes.CARD_URL}/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateCard: function(payload, id, callback) {
    return axios
      .put(`${routes.CARD_URL}/${id}`, payload)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  }
};

export default apiClient;
