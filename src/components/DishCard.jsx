import { Link } from "react-router-dom";

function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <Link to={`/menu/${dish.id}`} className="dish-image-link">
        <img src={dish.image} alt={dish.name} className="dish-image" />
      </Link>

      <div className="dish-card-content">
        <div className="dish-card-top">
          <span className="dish-category">{dish.category}</span>
          <span className="dish-rating">★ {dish.rating}</span>
        </div>

        <Link to={`/menu/${dish.id}`} className="dish-name">
          {dish.name}
        </Link>

        <p className="dish-description">{dish.description}</p>

        <div className="dish-card-bottom">
          <strong>{dish.price} ETB</strong>

          <Link to={`/menu/${dish.id}`} className="view-button">
            View
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DishCard;
