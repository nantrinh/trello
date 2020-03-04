export default function cardsReducer(state = [], action) {
  if (action.type === "FETCH_BOARD_SUCCESS") {
    let { lists, ...boardWithoutLists } = action.board;

    return lists.flatMap(list => {
      const { cards, ...listWithoutCards } = list;
      return cards;
    });
  } else if (action.type === "CREATE_CARD_SUCCESS") {
    return [...state, action.card];
  } else {
    return state;
  }
}
