import React from "react";

const Card = ({ card }) => {
  const labels = card.labels.map(label => (
    <div className={`card-label ${label} colorblindable`}></div>
  ));

  function check_due_date() {
    if (card.due_date) {
      return (
        <i className="clock-icon sm-icon overdue-recent completed">
          {card.due_date}
        </i>
      );
    }
  }
  function check_description() {
    if (card.description) {
      return <i className="description-icon sm-icon"></i>;
    }
  }
  function check_comments() {
    if (card.comments_count > 0) {
      return <i className="comment-icon sm-icon"></i>;
    }
  }
  return (
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
  );
};

export default Card;
