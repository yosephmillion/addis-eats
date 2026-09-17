import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { dishes } from "./data/data";
import { useCart } from "./context/CartContext";

import "./styles/dish-detail.css";

function DishDetail() {
  const { id } = useParams();
  const { addConfiguredItem } = useCart();

  const dish = dishes.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState({});
  const [note, setNote] = useState("");

  const extras = dish?.extras || [];

  const sideDishes = useMemo(
    () =>
      extras.filter((extra) => !extra.nameEn.toLowerCase().includes("spice")),
    [extras],
  );

  const spices = useMemo(
    () =>
      extras.filter((extra) => extra.nameEn.toLowerCase().includes("spice")),
    [extras],
  );

  const extrasTotal = extras.reduce(
    (total, extra) =>
      total + extra.priceETB * (selectedExtras[extra.nameEn] || 0),
    0,
  );

  const dishTotal = dish ? dish.priceETB * quantity : 0;

  const totalPrice = dishTotal + extrasTotal;

  function increaseQuantity() {
    setQuantity((current) => current + 1);
  }

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function increaseExtra(extra) {
    setSelectedExtras((current) => ({
      ...current,
      [extra.nameEn]: (current[extra.nameEn] || 0) + 1,
    }));
  }

  function decreaseExtra(extra) {
    setSelectedExtras((current) => {
      const currentQuantity = current[extra.nameEn] || 0;

      if (currentQuantity <= 1) {
        const updated = { ...current };
        delete updated[extra.nameEn];
        return updated;
      }

      return {
        ...current,
        [extra.nameEn]: currentQuantity - 1,
      };
    });
  }

  function handleAddToCart() {
    const chosenExtras = extras
      .map((extra) => {
        const extraQuantity = selectedExtras[extra.nameEn] || 0;

        if (extraQuantity === 0) {
          return null;
        }

        return {
          nameEn: extra.nameEn,
          nameAm: extra.nameAm,
          priceETB: extra.priceETB,
          image: extra.image,
          quantity: extraQuantity,
        };
      })
      .filter(Boolean);

    addConfiguredItem({
      ...dish,
      quantity,
      extras: chosenExtras,
      note: note.trim(),
      extrasTotal,
      totalPrice,
    });
  }

  if (!dish) {
    return (
      <section className="dish-not-found">
        <div className="container">
          <h1>Dish not found</h1>
          <p>The dish you are looking for does not exist.</p>

          <Link to="/menu">Back to Menu</Link>
        </div>
      </section>
    );
  }

  function ExtraCard({ extra }) {
    const extraQuantity = selectedExtras[extra.nameEn] || 0;

    return (
      <article
        className={`dish-extra-card ${
          extraQuantity > 0 ? "dish-extra-card-selected" : ""
        }`}
      >
        <div className="dish-extra-image">
          <img src={extra.image} alt={extra.nameEn} />
        </div>

        <div className="dish-extra-content">
          <div className="dish-extra-title">
            <strong>{extra.nameEn}</strong>

            <span className="dish-extra-amharic">{extra.nameAm}</span>
          </div>

          <span className="dish-extra-price">+{extra.priceETB} ETB</span>

          <div className="dish-extra-quantity">
            <button
              type="button"
              onClick={() => decreaseExtra(extra)}
              aria-label={`Decrease ${extra.nameEn}`}
            >
              −
            </button>

            <span>{extraQuantity}</span>

            <button
              type="button"
              onClick={() => increaseExtra(extra)}
              aria-label={`Increase ${extra.nameEn}`}
            >
              +
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <section className="dish-detail-page">
      <div className="container">
        <div className="dish-detail-layout">
          {/* LEFT */}
          <div className="dish-detail-left">
            <div className="dish-main-image">
              <img src={dish.image} alt={dish.nameEn} />

              {dish.isSpecial && <span className="dish-special-star">★</span>}

              <div className="dish-main-quantity">
                <button type="button" onClick={decreaseQuantity}>
                  −
                </button>

                <span>{quantity}</span>

                <button type="button" onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>

            <div className="dish-note-area">
              <label htmlFor="dish-note">Special note / prerequisites</label>

              <textarea
                id="dish-note"
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="Write special note or prerequisites"
                rows="4"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="dish-detail-right">
            <div className="dish-heading">
              <div className="dish-title-row">
                <div>
                  <h1>{dish.nameEn}</h1>

                  <p className="dish-name-am">{dish.nameAm}</p>
                </div>

                <strong className="dish-price">{dish.priceETB} ETB</strong>
              </div>

              {dish.tagline && <p className="dish-tagline">{dish.tagline}</p>}

              <p className="dish-category">{dish.category}</p>

              <p className="dish-description">{dish.description}</p>
            </div>

            {/* TOP ACTION */}
            <div className="dish-top-action">
              <div className="dish-top-total">
                <span>Order total</span>
                <strong>{totalPrice.toLocaleString()} ETB</strong>
              </div>

              <button
                type="button"
                className="dish-add-button"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>

            {/* SIDE DISHES */}
            {sideDishes.length > 0 && (
              <section className="dish-option-group">
                <div className="dish-option-heading">
                  <h2>
                    Extra Serving
                    <span>/ ተጨማሪ አገልግሎት</span>
                  </h2>

                  <p>Add extra bread, injera or kocho.</p>
                </div>

                <div className="dish-extras-grid">
                  {sideDishes.map((extra) => (
                    <ExtraCard key={extra.nameEn} extra={extra} />
                  ))}
                </div>
              </section>
            )}

            {/* SPICES */}
            {spices.length > 0 && (
              <section className="dish-option-group">
                <div className="dish-option-heading">
                  <h2>
                    Extra Hot Spice
                    <span>/ ተጨማሪ ቅመም</span>
                  </h2>

                  <p>Customize the heat and flavor.</p>
                </div>

                <div className="dish-extras-grid">
                  {spices.map((extra) => (
                    <ExtraCard key={extra.nameEn} extra={extra} />
                  ))}
                </div>
              </section>
            )}

            {/* DETAILS */}
            <section className="dish-information">
              <h2>Dish Details</h2>

              <div className="dish-meta-grid">
                <div>
                  <strong>Spice Level</strong>
                  <span>{dish.spiceLevel}</span>
                </div>

                <div>
                  <strong>Servings</strong>
                  <span>{dish.servings}</span>
                </div>

                <div>
                  <strong>Fasting</strong>
                  <span>{dish.isFasting ? "Yes" : "No"}</span>
                </div>

                <div>
                  <strong>Special</strong>
                  <span>{dish.isSpecial ? "Chef Special" : "Regular"}</span>
                </div>
              </div>
            </section>

            {/* INGREDIENTS */}
            <section className="dish-ingredients">
              <h2>Ingredients</h2>

              <ul>
                {dish.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DishDetail;
