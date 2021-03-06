import React from "react";
import CardDescriptionContainer from "./CardDescriptionContainer";
import { formattedDueDate, dueClass } from "../shared/MomentUtil";

const CardModalMain = ({ card }) => {
  const labels = card.labels.map((label) => (
    <div className="member-container" key={label}>
      <div className={`${label} label colorblindable`}></div>
    </div>
  ));

  return (
    <section className="modal-main">
      <ul className="modal-outer-list">
        <li className="details-section">
          <ul className="modal-details-list">
            <li className="labels-section">
              <h3>Labels</h3>
              {labels}
              <div className="member-container">
                <i className="plus-icon sm-icon"></i>
              </div>
            </li>
            {card.due_date ? (
              <li className="due-date-section">
                <h3>Due Date</h3>
                <div id="dueDateDisplay" className={dueClass(card)}>
                  <input
                    id="dueDateCheckbox"
                    type="checkbox"
                    className="checkbox"
                  />
                  {formattedDueDate(card)}
                </div>
              </li>
            ) : null}
          </ul>
          <CardDescriptionContainer
            cardId={card.id}
            description={card.description}
          />
        </li>
        <li className="comment-section">
          <h2 className="comment-icon icon">Add Comment</h2>
          <div>
            <div className="member-container">
              <div className="card-member">TP</div>
            </div>
            <div className="comment">
              <label>
                <textarea
                  required=""
                  rows="1"
                  placeholder="Write a comment..."
                ></textarea>
                <div>
                  <a className="light-button card-icon sm-icon"></a>
                  <a className="light-button smiley-icon sm-icon"></a>
                  <a className="light-button email-icon sm-icon"></a>
                  <a className="light-button attachment-icon sm-icon"></a>
                </div>
                <div>
                  <input
                    type="submit"
                    className="button not-implemented"
                    value="Save"
                  />
                </div>
              </label>
            </div>
          </div>
        </li>
        <li className="activity-section">
          <h2 className="activity-icon icon">Activity</h2>
          <ul className="horiz-list">
            <li className="not-implemented">Show Details</li>
          </ul>
          <ul className="modal-activity-list">
            <li>
              <div className="member-container">
                <div className="card-member">TP</div>
              </div>
              <h3>Taylor Peat</h3>
              <div className="comment static-comment">
                <span>The activities are not functional.</span>
              </div>
              <small>
                22 minutes ago - <span className="link">Edit</span> -{" "}
                <span className="link">Delete</span>
              </small>
              <div className="comment">
                <label>
                  <textarea required="" rows="1"></textarea>
                  <div>
                    <a className="light-button card-icon sm-icon"></a>
                    <a className="light-button smiley-icon sm-icon"></a>
                    <a className="light-button email-icon sm-icon"></a>
                  </div>
                  <div>
                    <p>You haven't typed anything!</p>
                    <input
                      type="submit"
                      className="button not-implemented"
                      value="Save"
                    />
                    <i className="x-icon icon"></i>
                  </div>
                </label>
              </div>
            </li>
            <li>
              <div className="member-container">
                <div className="card-member small-size">VR</div>
              </div>
              <p>
                <span className="member-name">Victor Reyes</span> changed the
                background of this board <small>yesterday at 4:53 PM</small>
              </p>
            </li>
            <li className="activity-comment">
              <div className="member-container">
                <div className="card-member">VR</div>
              </div>
              <h3>Victor Reyes</h3>
              <div className="comment static-comment">
                <span>Example of a comment.</span>
              </div>
              <small>
                22 minutes ago - <span className="link">Edit</span> -{" "}
                <span className="link">Delete</span>
              </small>
              <div className="comment">
                <label>
                  <textarea required="" rows="1"></textarea>
                  <div>
                    <a className="light-button card-icon sm-icon"></a>
                    <a className="light-button smiley-icon sm-icon"></a>
                    <a className="light-button email-icon sm-icon"></a>
                  </div>
                  <div>
                    <p>You haven't typed anything!</p>
                    <input
                      type="submit"
                      className="button not-implemented"
                      value="Save"
                    />
                    <i className="x-icon icon"></i>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default CardModalMain;
