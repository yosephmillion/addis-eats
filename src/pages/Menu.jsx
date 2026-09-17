import { Link, useSearchParams } from "react-router-dom";
import { dishes } from "../data/data.js";
import { useFavorites } from "../context/FavoritesContext";
import favoriteIcon from "../assets/icons/favorite-icon.jpg";
import "../styles/menu.css";

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toggleFavorite, isFavorite } = useFavorites();

  const selectedCategory = searchParams.get("category") || "All";

  const categories = ["All", ...new Set(dishes.map((dish) => dish.category))];

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  function handleCategoryChange(category) {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  }

  function handleFavoriteClick(event, dish) {
    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(dish);
  }

  return (
    <section className="menu-page">
      <div className="container">
        <div className="section-heading">
          <span>OUR MENU</span>

          <h1>Authentic Ethiopian Flavors</h1>

          <p>Traditional recipes. Fresh ingredients. Unforgettable taste.</p>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="dish-grid">
          {filteredDishes.map((dish) => {
            const favorite = isFavorite(dish.id);

            return (
              <article className="dish-card" key={dish.id}>
                <Link
                  to={`/menu/${dish.id}`}
                  className="dish-card-link"
                  aria-label={`View ${dish.nameEn}`}
                >
                  <div className="dish-card-visual">
                    <img src={dish.image} alt={dish.nameEn} />

                    {dish.isSpecial && (
                      <span className="special-badge">⭐</span>
                    )}

                    {dish.isFasting && (
                      <span className="vegan-badge">🌿 VEGAN</span>
                    )}
                  </div>

                  <div className="dish-card-content">
                    <span className="dish-category">{dish.category}</span>

                    <p className="dish-amharic">{dish.nameAm}</p>

                    <h2>{dish.nameEn}</h2>

                    <p>{dish.description}</p>

                    <div className="dish-card-footer">
                      <strong>{dish.priceETB} ETB</strong>
                    </div>
                  </div>
                </Link>

                <button
                  type="button"
                  className={
                    favorite ? "favorite-button active" : "favorite-button"
                  }
                  onClick={(event) => handleFavoriteClick(event, dish)}
                  aria-label={
                    favorite
                      ? `Remove ${dish.nameEn} from favorites`
                      : `Add ${dish.nameEn} to favorites`
                  }
                  aria-pressed={favorite}
                >
                  <img
                    src={favoriteIcon}
                    alt=""
                    className="favorite-icon-image"
                  />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Menu;
