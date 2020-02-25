import React from "react";

const Board = ({ board }) => {
  return (
    <header>
      <ul>
        <li id="title">{board.title}</li>
        <li class="star-icon icon"></li>
        <li class="private private-icon icon">Private</li>
      </ul>
      <div class="menu">
        <i class="more-icon sm-icon"></i>Show Menu
      </div>
      <div class="subscribed">
        <i class="sub-icon sm-icon"></i>Subscribed
      </div>
    </header>
  );
};

export default Board;
