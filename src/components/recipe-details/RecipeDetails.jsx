import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import backArrow from "../../assets/images/back-arrow.png";
import data from "../../assets/data/recipes.json";
import "./recipe-details.css";
import AddComment from "../add-comment/AddComment";

export default function RecipeDetails() {
  const history = useHistory();
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: [],
    instructions: [],
    comments: [],
  });

  const [addComment, setAddComment] = useState(false);

  useEffect(() => {
    const i = data.findIndex((d) => d.id === +id);
    if (i !== -1) setRecipe(data[i]);
  }, [recipe, id]);

  const showAddCommentPopup = () => {
    setAddComment(true);
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  const handleAddComment = (comment) => {
    setAddComment(false);
    console.log(comment);
  };

  return (
    <>
      {addComment && (
        <AddComment
          onCloseClick={() => setAddComment(false)}
          onSaveClick={(comment) => handleAddComment(comment)}
        />
      )}
      <div className="add-recipe-container">
        <img
          src={backArrow}
          className="back-arrow"
          alt="back arrow"
          onClick={() => history.goBack()}
        />
        <div className="header">Recipe Details </div>
      </div>
      <div className="detail-container">
        <div className="card large-mar">
          <div className="detail-title">
            <span className="recipe-label" htmlFor="">
              Recipe name
            </span>
            {recipe.title}
          </div>

          <div className="detail-ingredients">
            <span className="recipe-label" htmlFor="">
              Ingredients
            </span>
            <ul className="detail-list">
              {recipe.ingredients.map((ing, i) => (
                <li key={i}> {ing} </li>
              ))}
            </ul>
          </div>

          <div className="detail-instructions">
            <span className="recipe-label" htmlFor="">
              Directions
            </span>

            <ol className="detail-list">
              {recipe.instructions.map((ing, i) => (
                <li key={i}> {ing} </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="card large-bottom-mar">
          <div className="comment-row">
            <div className="comment-title">Comments </div>
            <button
              className="button-small"
              onClick={() => showAddCommentPopup()}
            >
              Add Comment
            </button>
          </div>
          <div className="divider"></div>

          <div className="comment-section">
            {recipe.comments.map((c) => (
              <div key={c.id}>
                <span className="comment-text">&ldquo;{c.comment}&rdquo;</span>
                <span className="comment-user"> - {c.commentedBy} </span>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
