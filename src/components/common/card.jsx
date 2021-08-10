import share from "../../assets/images/share.png";
const Card = ({ recipe, onClick }) => {
  return (
    <div className="recipe-container" onClick={onClick}>
      <div className="card card-clickable large-mar">
        <div className="card-row">
          <span className="card-title"> {recipe.title} </span>
          <img src={share} className="share-image" alt="share" />
        </div>
        <div className="med-top-mar">
          <span>
            <strong>Ingredients : </strong>
            {recipe.ingredients.map((item, i) => (
              <span key={i}>&#9737;{item} </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
