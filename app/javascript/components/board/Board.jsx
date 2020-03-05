import React from "react";
import ListContainer from "../list/ListContainer";
import NewListContainer from "../list/NewListContainer";
import BoardHeader from "./BoardHeader";

class Board extends React.Component {
  render() {
    console.log("in render", this.props.boardId);

    return (
      <div>
        <BoardHeader title={this.props.board.title} />
        <main>
          <div id="list-container" className="list-container">
            <ListContainer boardId={this.props.board.id} />
            <NewListContainer boardId={this.props.board.id} />
          </div>
        </main>
      </div>
    );
  }
}

export default Board;
