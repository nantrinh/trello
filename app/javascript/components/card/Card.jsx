import React from "react";
import { Link } from "react-router-dom";
import { formattedDueDate, dueClass } from "../shared/MomentUtil";

const Card = ({ card }) => {
  const labels = card.labels.map(label => (
    <div key={label} className={`card-label ${label} colorblindable`}></div>
  ));

  const check_due_date = () => {
    if (card.due_date) {
      return (
        <i className={`clock-icon sm-icon ${dueClass(card)}`}>
          {formattedDueDate(card)}
        </i>
      );
    }
  };
  const check_description = () => {
    if (card.description) {
      return <i className="description-icon sm-icon"></i>;
    }
  };
  const check_comments = () => {
    if (card.comments_count > 0) {
      return <i className="comment-icon sm-icon"></i>;
    }
  };
  return (
    <Link to={"/cards/" + card.id}>
      <div className="card-background">
        <div className="card">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            {labels}
            <p>{card.title}</p>
          </div>
          <div className="card-icons">
            {check_due_date()}
            {check_description()}
            {check_comments()}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
