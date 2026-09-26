import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

import "../styles/cart.css";

function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    increaseExtraQuantity,
    decreaseExtraQuantity,
    removeExtra,
    removeFromCart,
    updateNote,
    clearCart,
    getCartTotal,
  } = useCartStore();
  const cartTotal = getCartTotal();
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

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.cartItemId}>
                <Link to={`/menu/${item.id}`} className="cart-item-image-link">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.nameEn} />
                  </div>
                </Link>

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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 -960 960 960"
                        width="30px"
                        fill="#ff0000"
                      >
                        <path d="m339-288 141-141 141 141 51-51-141-141 141-141-51-51-141 141-141-141-51 51 141 141-141 141 51 51ZM480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                      </svg>
                    </button>
                  </div>

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

                  {item.extras && item.extras.length > 0 && (
                    <div className="cart-extras">
                      <h3>Extras / ተጨማሪ</h3>

                      <div className="cart-extra-list">
                        {item.extras.map((extra) => (
                          <div className="cart-extra" key={extra.nameEn}>
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
                                      extra.nameEn,
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
                                      extra.nameEn,
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
                                  removeExtra(item.cartItemId, extra.nameEn)
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

                  <div className="cart-item-total">
                    <span>Item Total</span>

                    <strong>
                      {(
                        Number(item.priceETB || 0) *
                          Number(item.quantity || 1) +
                        (item.extras || []).reduce(
                          (total, extra) =>
                            total +
                            Number(extra.priceETB || 0) *
                              Number(extra.quantity || 1),
                          0,
                        )
                      ).toLocaleString()}{" "}
                      ETB
                    </strong>
                  </div>
                </div>
              </article>
            ))}
          </div>

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
                      (total, item) =>
                        total +
                        (item.extras || []).reduce(
                          (extraTotal, extra) =>
                            extraTotal +
                            Number(extra.priceETB || 0) *
                              Number(extra.quantity || 1),
                          0,
                        ),
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
