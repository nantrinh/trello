import React from "react";
import CardsContainer from "../card/CardsContainer";
import ListTitleContainer from "./ListTitleContainer";
import NewCardForm from "../card/NewCardForm";

const List = ({ title, id, editing, active, onActiveList }) => {
  const handleOpenClick = () => {
    onActiveList(id);
  };

  return (
    <div
      className={active ? "list-wrapper add-dropdown-active" : "list-wrapper"}
    >
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <ListTitleContainer title={title} listId={id} />
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>

          <CardsContainer listId={id} />

          <NewCardForm active={active} />
          <div
            className="add-card-toggle"
            data-position="bottom"
            onClick={handleOpenClick}
          >
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
