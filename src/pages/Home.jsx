import { Link } from "react-router-dom";
import { useFavoritesStore } from "../store/favoritesStore";

import favouriteIcon from "../assets/icons/favorite-icon.jpg";
import specialStar from "../assets/icons/special-star.jpg";
import addisAbabaImage from "../assets/icons/addisababa.png";
import "../styles/home.css";
import "../styles/menu.css";
import { dishes } from "./../data/data";

function Home() {
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const specialDishes = dishes.filter((dish) => dish.isSpecial).slice(0, 4);

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-slideshow">
          {specialDishes.map((dish, index) => (
            <div
              key={dish.id}
              className="home-hero-slide"
              style={{
                backgroundImage: `url(${dish.image})`,
                animationDelay: `${index * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="home-hero-overlay"></div>

        <div className="container home-hero-inner">
          <div className="home-hero-content">
            <span className="home-label">AUTHENTIC ETHIOPIAN FOOD</span>

            <h1>
              The taste of
              <br />
              Ethiopia.
            </h1>

            <p>
              Traditional Ethiopian dishes made with quality ingredients and
              delivered across Addis Ababa.
            </p>

            <div className="home-actions">
              <Link to="/menu" className="home-button">
                View Menu
              </Link>

              <Link to="/menu" className="home-button home-button-light">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div className="container home-intro-grid">
          <div className="home-intro-title">
            <span className="home-label">OUR KITCHEN</span>

            <h2>
              Rooted in
              <br />
              tradition.
            </h2>
          </div>

          <div className="home-intro-copy">
            <p>
              Addis Eats brings the rich flavors of Ethiopian cuisine to your
              table. From traditional favorites to carefully prepared
              specialties, every dish is made to feel like home.
            </p>

            <Link to="/menu" className="home-text-link">
              Discover our menu →
            </Link>
          </div>
        </div>
      </section>

      <section className="home-specials">
        <div className="container">
          <div className="home-special-heading">
            <div>
              <span className="home-label">FROM OUR KITCHEN</span>

              <h2>Special dishes.</h2>
            </div>

            <p>
              A selection of our special Ethiopian dishes, prepared fresh for
              your table.
            </p>
          </div>

          <div className="dish-grid home-special-grid">
            {specialDishes.map((dish) => (
              <Link key={dish.id} to={`/menu/${dish.id}`} className="dish-card">
                <div className="dish-card-visual">
                  <img src={dish.image} alt={dish.nameEn} />
                  <div className="dish-card-content">
                    <span className="dish-category">{dish.category}</span>
                    <p className="dish-amharic">{dish.nameAm}</p>
                    <h2>{dish.nameEn}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="home-menu-link">
            <Link to="/menu">Explore all dishes →</Link>
          </div>
        </div>
      </section>

      <section className="home-delivery">
        <div className="home-delivery-image">
          <img src={addisAbabaImage} alt="Addis Ababa delivery area" />
        </div>

        <div className="home-delivery-overlay"></div>

        <div className="container home-delivery-inner">
          <div className="home-delivery-content">
            <span className="home-label">WE DELIVER</span>

            <h2>
              Across
              <br />
              Addis Ababa.
            </h2>

            <p>
              Your favorite Ethiopian dishes, prepared fresh and delivered to
              your door across Addis Ababa.
            </p>

            <Link to="/menu" className="home-button">
              Order for Delivery
            </Link>
          </div>
        </div>
      </section>

      <section className="home-info">
        <div className="container home-info-grid">
          <div className="home-info-item">
            <span className="home-label">QUALITY</span>

            <h3>Fresh ingredients</h3>

            <p>
              Carefully selected ingredients prepared fresh for every order.
            </p>
          </div>

          <div className="home-info-item">
            <span className="home-label">TRADITION</span>

            <h3>Ethiopian flavors</h3>

            <p>
              Traditional recipes and familiar flavors brought together in every
              dish.
            </p>
          </div>

          <div className="home-info-item">
            <span className="home-label">DELIVERY</span>

            <h3>Across Addis Ababa</h3>

            <p>Enjoy your favorite dishes delivered directly to your door.</p>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container home-cta-inner">
          <span className="home-label">READY TO EAT?</span>

          <h2>
            Your table
            <br />
            is waiting.
          </h2>

          <Link to="/menu" className="home-button">
            Explore the Menu
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
