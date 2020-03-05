export default function cardsReducer(state = [], action) {
  if (action.type === "FETCH_BOARD_SUCCESS") {
    let { lists, ...boardWithoutLists } = action.board;

    return lists.flatMap(list => {
      const { cards, ...listWithoutCards } = list;
      return cards;
    });
  } else if (action.type === "CREATE_CARD_SUCCESS") {
    return [...state, action.card];
  } else if (action.type === "FETCH_CARD_SUCCESS") {
    console.log("in reducer:", action.card);
    if (state.length === 0) {
      return [action.card];
    }

    return state.map(card => {
      if (card.id === action.card.id) {
        return action.card;
      }

      return card;
    });
  } else {
    return state;
  }
}
