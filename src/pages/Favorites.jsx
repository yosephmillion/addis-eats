import { Link } from "react-router-dom";
import { useFavoritesStore } from "../store/favoritesStore";
import favoriteIcon from "../assets/icons/favorite-icon.jpg";

import "../styles/favorites.css";

function Favorites() {
  const { favorites, toggleFavorite } = useFavoritesStore();

  return (
    <section className="favorites-page">
      <div className="container">
        <div className="section-heading">
          <span>YOUR COLLECTION</span>

          <h1>Favorites</h1>
        </div>

        {favorites.length === 0 ? (
          <div className="favorites-empty">
            <div className="favorites-empty-icon">:(</div>

            <h2>No favorites yet</h2>

            <p>
              Explore our menu and save the Ethiopian dishes you would love to
              try.
            </p>

            <Link to="/menu" className="btn-primary">
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="favorites-grid">
            {favorites.map((dish) => (
              <article className="favorite-dish-card" key={dish.id}>
                <Link to={`/menu/${dish.id}`} className="favorite-dish-link">
                  <div className="favorite-dish-visual">
                    <img src={dish.image} alt={dish.nameEn} />
                  </div>

                  <div className="favorite-dish-content">
                    <span className="favorite-dish-category">
                      {dish.category}
                    </span>

                    <p className="favorite-dish-amharic">{dish.nameAm}</p>

                    <h2>{dish.nameEn}</h2>

                    <p className="favorite-dish-description">
                      {dish.description}
                    </p>

                    <span className="favorite-dish-price">
                      {Number(dish.priceETB).toLocaleString()} ETB
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  className="favorite-remove-button"
                  onClick={() => toggleFavorite(dish)}
                  aria-label={`Remove ${dish.nameEn} from favorites`}
                >
                  <img
                    src={favoriteIcon}
                    alt=""
                    className="favorite-icon-image"
                  />
                </button>

                {dish.isSpecial && (
                  <span className="favorite-special-badge">★</span>
                )}

                {dish.isFasting && (
                  <span className="favorite-vegan-badge">VEGAN</span>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Favorites;
