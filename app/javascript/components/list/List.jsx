import React from "react";
import CardsContainer from "../card/CardsContainer";
import ListTitleContainer from "./ListTitleContainer";
import NewCardFormContainer from "../card/NewCardFormContainer";

const List = ({ title, id, editing }) => {
  return (
    // className of this div needs to change based on whether the new card is being added or not
    // <div className="list-wrapper">
    <div className="list-wrapper add-dropdown-active">
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
          <div className="add-dropdown add-bottom">
            <NewCardFormContainer />
          </div>

          {/* <div className="add-dropdown add-bottom">
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default List;
