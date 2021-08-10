import React, { useState } from "react";
import close from "../../assets/images/close.png";
import "./add-comment.css";
const AddComment = ({ onCloseClick, onSaveClick }) => {
  const [comment, setComment] = useState("");
  return (
    <div className="add-comment-backdrop">
      <div className="add-comment-container">
        <div className="add-comment-row">
          <div className="comment-title"> Add Comment </div>
          <img
            className="close-icon"
            src={close}
            onClick={() => onCloseClick(comment)}
            alt="close icon"
          />
        </div>
        <div className="divider"></div>
        <textarea
          className="user-input med-top-mar italic-text"
          placeholder="Enter your comment here"
          rows="10"
          cols="50"
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
        ></textarea>
        <div className="row med-mar">
          <button
            className="button-medium med-right-mar"
            onClick={() => onSaveClick(comment)}
          >
            SAVE
          </button>
          <button className="button-medium-outline" onClick={onCloseClick}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
