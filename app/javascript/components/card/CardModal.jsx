import React from "react";
import { Link } from "react-router-dom";
import CardModalHeader from "./CardModalHeader";
import CardModalMain from "./CardModalMain";
import CardModalSidebar from "./CardModalSidebar";

const CardModal = ({ card, listTitle }) => {
  return (
    <div id="modal-container">
      <div className="screen"></div>
      <div id="modal">
        <Link to={`/boards/${card.board_id}`}>
          <i className="x-icon icon close-modal"></i>
        </Link>
        <CardModalHeader cardTitle={card.title} listTitle={listTitle} />
        <CardModalMain card={card} />
        <CardModalSidebar />
      </div>
    </div>
  );
};

export default CardModal;
