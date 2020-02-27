export default function listsReducer(state = [], action) {
  if (action.type === "FETCH_BOARD_SUCCESS") {
    let { lists, ...boardWithoutLists } = action.board;

    return lists.map(list => {
      const { cards, ...listWithoutCards } = list;
      return listWithoutCards;
    });
  } else {
    return state;
  }
}
