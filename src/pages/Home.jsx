import { Link } from "react-router-dom";
import { dishes } from "../data/data";

import "../styles/home.css";

function Home() {
  const doroWat = dishes.find((dish) => dish.id === "menu-1");

  const kitfo = dishes.find((dish) => dish.id === "menu-10");

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <div className="container home-hero-inner">
          <div className="home-hero-content">
            <span className="home-label">AUTHENTIC ETHIOPIAN FOOD</span>

            <h1>
              The taste of
              <br />
              Ethiopia.
            </h1>

            <p>
              Traditional Ethiopian dishes made with care and delivered across
              Addis Ababa.
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

      {/* INTRO */}
      <section className="home-intro">
        <div className="container">
          <span className="home-label">ADDIS EATS</span>

          <h2>
            Simple food.
            <br />
            Deep tradition.
          </h2>

          <p>
            We bring classic Ethiopian flavors to your table, from rich wats and
            tibs to traditional kitfo and refreshing drinks.
          </p>
        </div>
      </section>
      {/* SPECIAL DISHES */}
      <section className="home-specials">
        <div className="container">
          <div className="home-special-heading">
            <span>OUR SPECIAL DISHES</span>

            <h2>Today's Favorites</h2>

            <p>A few of our most loved Ethiopian dishes.</p>
          </div>

          <div className="dish-grid home-dish-grid">
            {doroWat && (
              <Link to={`/menu/${doroWat.id}`} className="dish-card">
                <div className="dish-card-visual">
                  <img src={doroWat.image} alt={doroWat.nameEn} />
                </div>

                <span className="special-badge">★</span>

                <div className="dish-card-content">
                  <span className="dish-category">{doroWat.category}</span>

                  <p className="dish-amharic">{doroWat.nameAm}</p>

                  <h2>{doroWat.nameEn}</h2>

                  <p></p>

                  <div className="dish-card-footer">
                    <strong>
                      {Number(doroWat.priceETB).toLocaleString()} ETB
                    </strong>
                  </div>
                </div>
              </Link>
            )}

            {kitfo && (
              <Link to={`/menu/${kitfo.id}`} className="dish-card">
                <div className="dish-card-visual">
                  <img src={kitfo.image} alt={kitfo.nameEn} />
                </div>

                <span className="special-badge">★</span>

                <div className="dish-card-content">
                  <span className="dish-category">{kitfo.category}</span>

                  <p className="dish-amharic">{kitfo.nameAm}</p>

                  <h2>{kitfo.nameEn}</h2>

                  <p></p>

                  <div className="dish-card-footer">
                    <strong>
                      {Number(kitfo.priceETB).toLocaleString()} ETB
                    </strong>
                  </div>
                </div>
              </Link>
            )}
          </div>

          <div className="home-menu-link">
            <Link to="/menu">View Full Menu →</Link>
          </div>
        </div>
      </section>

      {/* INFORMATION */}
      <section className="home-info">
        <div className="container home-info-grid">
          <div>
            <span className="home-label">DELIVERY</span>

            <h3>Across Addis Ababa</h3>

            <p>
              Order your favorite Ethiopian dishes and have them delivered to
              your door.
            </p>
          </div>

          <div>
            <span className="home-label">CONTACT</span>

            <h3>+251 967 676 767</h3>

            <p>Call us for orders and delivery questions.</p>
          </div>

          <div>
            <span className="home-label">LOCATION</span>

            <h3>Addis Ababa</h3>

            <p>Bole, Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container">
          <span className="home-label">READY TO EAT?</span>

          <h2>
            Bring Ethiopia
            <br />
            to your table.
          </h2>

          <Link to="/menu" className="home-button">
            Explore Menu
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
