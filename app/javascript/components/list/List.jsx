import React from "react";
import CardsContainer from "../card/CardsContainer";
import ListTitleContainer from "./ListTitleContainer";
import NewCardForm from "../card/NewCardForm";

const List = ({
  title,
  id,
  active,
  onActiveList,
  onInactiveList,
  onSubmit
}) => {
  const handleOpenClick = () => {
    onActiveList(id);
  };

  const handleCloseClick = () => {
    onInactiveList();
  };

  const handleSubmit = (cardTitle, callback) => {
    onSubmit(id, cardTitle, callback);
  };

  return (
    <div
      className={active ? "list-wrapper add-dropdown-active" : "list-wrapper"}
    >
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <ListTitleContainer title={title} listId={id} />
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>

          <CardsContainer listId={id} />

          <NewCardForm
            active={active}
            onCloseClick={handleCloseClick}
            onSubmit={handleSubmit}
          />
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
