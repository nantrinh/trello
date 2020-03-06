onDrop: function handleDrop(e) {
      const droppedEl = e.target;
      const listId = Number(droppedEl.dataset.listId);
      const siblings = Array.prototype.slice.call(droppedEl.parentNode.childNodes);
      const lists = listSelectors.boardListsSelector(stateProps.state, ownProps.list.board_id);
      const targetIndex = siblings.indexOf(droppedEl);
      const sortedStartingList = lists
        .slice()
        .sort((a, b) => a.position - b.position)
      const droppedList = sortedStartingList
          .find(list => list.id === listId);
      const sourceIndex = sortedStartingList.indexOf(droppedList);
      const newPosition = calculatePosition(lists, targetIndex, sourceIndex);