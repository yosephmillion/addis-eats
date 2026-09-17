import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import "../styles/cart.css";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    increaseExtraQuantity,
    decreaseExtraQuantity,
    removeExtra,
    removeFromCart,
    updateNote,
    clearCart,
  } = useCart();

  function handleCheckout() {
    navigate("/checkout");
  }

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <div className="container cart-empty-container">
          <div className="cart-empty">
            <span className="cart-eyebrow">YOUR ORDER</span>

            <h1>Your Cart</h1>

            <p>
              Your cart is empty. Explore our Ethiopian dishes and build your
              order.
            </p>

            <Link to="/menu" className="cart-primary-button">
              Explore Menu
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="container">
        {/* PAGE HEADER */}
        <div className="cart-heading">
          <div>
            <span className="cart-eyebrow">YOUR ORDER</span>

            <h1>Your Cart</h1>

            <p>
              Review your dishes, extras and special requests before checkout.
            </p>
          </div>

          <button
            type="button"
            className="cart-clear-button"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* CART CONTENT */}
        <div className="cart-layout">
          {/* LEFT SIDE */}
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.cartItemId}>
                {/* DISH IMAGE */}
                <Link to={`/menu/${item.id}`} className="cart-item-image-link">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.nameEn} />
                  </div>
                </Link>

                {/* DISH INFORMATION */}
                <div className="cart-item-main">
                  <div className="cart-item-top">
                    <div>
                      <span className="cart-item-category">
                        {item.category}
                      </span>

                      <p className="cart-item-amharic">{item.nameAm}</p>

                      <Link to={`/menu/${item.id}`} className="cart-item-name">
                        {item.nameEn}
                      </Link>
                    </div>

                    <button
                      type="button"
                      className="cart-remove-button"
                      onClick={() => removeFromCart(item.cartItemId)}
                    >
                      Remove
                    </button>
                  </div>

                  {/* MAIN DISH PRICE + QUANTITY */}
                  <div className="cart-item-row">
                    <div className="cart-price">
                      {Number(item.priceETB).toLocaleString()} ETB
                    </div>

                    <div className="cart-quantity">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.cartItemId)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.cartItemId)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* EXTRAS */}
                  {item.extras && item.extras.length > 0 && (
                    <div className="cart-extras">
                      <h3>Extras / ተጨማሪ</h3>

                      <div className="cart-extra-list">
                        {item.extras.map((extra) => (
                          <div className="cart-extra" key={extra.id}>
                            <div className="cart-extra-info">
                              {extra.image && (
                                <img src={extra.image} alt={extra.nameEn} />
                              )}

                              <div>
                                <p className="cart-extra-amharic">
                                  {extra.nameAm}
                                </p>

                                <h4>{extra.nameEn}</h4>

                                <span>
                                  {Number(extra.priceETB).toLocaleString()} ETB
                                </span>
                              </div>
                            </div>

                            <div className="cart-extra-actions">
                              <div className="cart-extra-quantity">
                                <button
                                  type="button"
                                  onClick={() =>
                                    decreaseExtraQuantity(
                                      item.cartItemId,
                                      extra.id,
                                    )
                                  }
                                >
                                  −
                                </button>

                                <span>{extra.quantity || 1}</span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    increaseExtraQuantity(
                                      item.cartItemId,
                                      extra.id,
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>

                              <button
                                type="button"
                                className="cart-extra-remove"
                                onClick={() =>
                                  removeExtra(item.cartItemId, extra.id)
                                }
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* NOTE */}
                  <div className="cart-note">
                    <label htmlFor={`note-${item.cartItemId}`}>
                      Special note / ልዩ ማስታወሻ
                    </label>

                    <textarea
                      id={`note-${item.cartItemId}`}
                      value={item.note || ""}
                      onChange={(event) =>
                        updateNote(item.cartItemId, event.target.value)
                      }
                      placeholder="Add a special request for this dish..."
                      rows="3"
                    />
                  </div>

                  {/* TOTAL */}
                  <div className="cart-item-total">
                    <span>Item Total</span>

                    <strong>
                      {Number(item.totalPrice || 0).toLocaleString()} ETB
                    </strong>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT SIDE SUMMARY */}
          <aside className="cart-summary">
            <div className="cart-summary-inner">
              <span className="cart-eyebrow">ORDER SUMMARY</span>

              <h2>Your Order</h2>

              <div className="cart-summary-line">
                <span>Dishes</span>

                <span>
                  {cart
                    .reduce(
                      (total, item) =>
                        total +
                        Number(item.priceETB || 0) * Number(item.quantity || 1),
                      0,
                    )
                    .toLocaleString()}{" "}
                  ETB
                </span>
              </div>

              <div className="cart-summary-line">
                <span>Extras</span>

                <span>
                  {cart
                    .reduce(
                      (total, item) => total + Number(item.extrasTotal || 0),
                      0,
                    )
                    .toLocaleString()}{" "}
                  ETB
                </span>
              </div>

              <div className="cart-summary-divider" />

              <div className="cart-summary-total">
                <span>Total</span>

                <strong>{Number(cartTotal).toLocaleString()} ETB</strong>
              </div>

              {/* TOP-LEVEL CHECKOUT BUTTON */}
              <button
                type="button"
                className="cart-checkout-button"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>

              <Link to="/menu" className="cart-continue-button">
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Cart;
