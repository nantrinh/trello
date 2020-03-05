export default function listsReducer(state = [], action) {
  if (action.type === "FETCH_BOARD_SUCCESS") {
    let { lists, ...boardWithoutLists } = action.board;

    return lists.map(list => {
      const { cards, ...listWithoutCards } = list;
      return listWithoutCards;
    });
  } else if (action.type === "CREATE_LIST_SUCCESS") {
    return [...state, action.list];
  } else if (action.type === "UPDATE_LIST_SUCCESS") {
    return state.map(list => {
      if (list.id === action.list.id) {
        return action.list;
      }
      return list;
    });
  } else {
    return state;
  }
}
