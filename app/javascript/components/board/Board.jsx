import React from "react";
import ListContainer from "../list/ListContainer";
import NewListContainer from "../list/NewListContainer";

const Board = ({ board }) => {
  return (
    <div>
      <header>
        <ul>
          <li id="title">{board.title}</li>
          <li className="star-icon icon"></li>
          <li className="private private-icon icon">Private</li>
        </ul>
        <div className="menu">
          <i className="more-icon sm-icon"></i>Show Menu
        </div>
        <div className="subscribed">
          <i className="sub-icon sm-icon"></i>Subscribed
        </div>
      </header>
      <main>
        <div id="list-container" className="list-container">
          <ListContainer boardId={board.id} />
          <NewListContainer boardId={board.id} />
        </div>
      </main>
    </div>
  );
};

export default Board;
