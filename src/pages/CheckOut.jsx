import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import { useCartStore } from "../store/cartStore";
import { checkoutSchema } from "../schemas/checkoutSchema";

import telebirrLogo from "../assets/icons/telebirr.png";
import cbebirrLogo from "../assets/icons/cbebirr.png";
import chappaLogo from "../assets/icons/chappa.jpg";
import mpesaLogo from "../assets/icons/mpesa.jpg";

import "../styles/checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),

    defaultValues: {
      fullName: "",
      phone: "",
      city: "",
      address: "",
      deliveryNote: "",
      paymentMethod: "",
    },
  });

  const paymentMethod = watch("paymentMethod");

  const paymentOptions = [
    {
      id: "telebirr",
      name: "Telebirr",
      image: telebirrLogo,
    },
    {
      id: "cbebirr",
      name: "CBE Birr",
      image: cbebirrLogo,
    },
    {
      id: "chapa",
      name: "Chapa",
      image: chappaLogo,
    },
    {
      id: "mpesa",
      name: "M-Pesa",
      image: mpesaLogo,
    },
  ];

  const selectedPayment = paymentOptions.find(
    (payment) => payment.id === paymentMethod,
  );

  const onSubmit = (data) => {
    alert(`Order placed successfully!\nPayment: ${data.paymentMethod}`);

    clearCart();
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <section className="checkout-page">
        <div className="container checkout-empty">
          <span className="checkout-eyebrow">CHECKOUT</span>

          <h1>Your cart is empty</h1>

          <p>
            Add some Ethiopian dishes to your cart before continuing to
            checkout.
          </p>

          <Link to="/menu" className="checkout-primary-button">
            Explore Menu
          </Link>
        </div>
      </section>
    );
  }

  const dishesTotal = cart.reduce(
    (total, item) =>
      total + Number(item.priceETB || 0) * Number(item.quantity || 1),
    0,
  );

  const extrasTotal = cart.reduce(
    (total, item) =>
      total +
      (item.extras || []).reduce(
        (extraTotal, extra) =>
          extraTotal +
          Number(extra.priceETB || 0) * Number(extra.quantity || 1),
        0,
      ),
    0,
  );

  const cartTotal = dishesTotal + extrasTotal;

  return (
    <section className="checkout-page">
      <div className="container">
        <div className="checkout-heading">
          <span className="checkout-eyebrow">COMPLETE YOUR ORDER</span>

          <h1>Checkout</h1>

          <p>
            Enter your delivery details and choose how you would like to pay.
          </p>
        </div>

        <form
          className="checkout-layout"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="checkout-main">
            <section className="checkout-section">
              <div className="checkout-section-heading">
                <span>01</span>

                <div>
                  <h2>Delivery Address</h2>

                  <p>Where should we deliver your Addis Eats order?</p>
                </div>
              </div>

              <div className="checkout-form-grid">
                <div className="checkout-field">
                  <label htmlFor="fullName">Full Name</label>

                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    {...register("fullName")}
                  />

                  {errors.fullName && (
                    <small className="checkout-error">
                      {errors.fullName.message}
                    </small>
                  )}
                </div>

                <div className="checkout-field">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="09XXXXXXXX"
                    {...register("phone")}
                  />

                  {errors.phone && (
                    <small className="checkout-error">
                      {errors.phone.message}
                    </small>
                  )}
                </div>

                <div className="checkout-field">
                  <label htmlFor="city">City</label>

                  <input
                    id="city"
                    type="text"
                    placeholder="Addis Ababa"
                    {...register("city")}
                  />

                  {errors.city && (
                    <small className="checkout-error">
                      {errors.city.message}
                    </small>
                  )}
                </div>

                <div className="checkout-field checkout-field-full">
                  <label htmlFor="address">Delivery Address</label>

                  <input
                    id="address"
                    type="text"
                    placeholder="Street, building, area or landmark"
                    {...register("address")}
                  />

                  {errors.address && (
                    <small className="checkout-error">
                      {errors.address.message}
                    </small>
                  )}
                </div>
              </div>

              <div className="checkout-map-wrapper">
                <div className="checkout-map-header">
                  <div>
                    <h3>Delivery Location</h3>

                    <p>Select your delivery location on the map.</p>
                  </div>

                  <button
                    type="button"
                    className="map-location-button"
                    onClick={() =>
                      alert(
                        "Map location can be connected to Google Maps or OpenStreetMap.",
                      )
                    }
                  >
                    Use My Location
                  </button>
                </div>

                <div className="checkout-map">
                  <div className="map-grid">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="map-pin">
                    <div className="map-pin-dot"></div>
                  </div>

                  <div className="map-label">Addis Ababa</div>

                  <p className="map-placeholder">Map location</p>
                </div>
              </div>

              <div className="checkout-field">
                <label htmlFor="deliveryNote">Delivery Note</label>

                <textarea
                  id="deliveryNote"
                  placeholder="Example: Please call when you arrive..."
                  rows="3"
                  {...register("deliveryNote")}
                />
              </div>
            </section>

            <section className="checkout-section">
              <div className="checkout-section-heading">
                <span>02</span>

                <div>
                  <h2>Payment Method</h2>

                  <p>Choose your preferred payment method.</p>
                </div>
              </div>

              <div className="payment-options">
                {paymentOptions.map((payment) => (
                  <button
                    type="button"
                    key={payment.id}
                    className={`payment-option ${
                      paymentMethod === payment.id ? "selected" : ""
                    }`}
                    onClick={() =>
                      setValue("paymentMethod", payment.id, {
                        shouldValidate: true,
                        shouldDirty: true,
                      })
                    }
                  >
                    <span className="payment-logo">
                      <img src={payment.image} alt={payment.name} />
                    </span>

                    <span className="payment-name">{payment.name}</span>

                    <span className="payment-radio">
                      {paymentMethod === payment.id && "✓"}
                    </span>
                  </button>
                ))}
              </div>

              {errors.paymentMethod && (
                <p className="checkout-error payment-error">
                  {errors.paymentMethod.message}
                </p>
              )}

              {paymentMethod && selectedPayment && (
                <div className="qr-payment">
                  <div className="qr-placeholder">
                    <div className="qr-inner">
                      <span>QR</span>
                    </div>
                  </div>

                  <div className="qr-content">
                    <span className="checkout-eyebrow">PAYMENT</span>

                    <h3>Pay with {selectedPayment.name}</h3>

                    <p>
                      Open your {selectedPayment.name} application and complete
                      the payment.
                    </p>

                    <strong>
                      Amount: {Number(cartTotal).toLocaleString()} ETB
                    </strong>
                  </div>
                </div>
              )}
            </section>

            <button type="submit" className="place-order-button">
              Place Order
            </button>
          </div>

          <aside className="checkout-summary">
            <div className="checkout-summary-inner">
              <span className="checkout-eyebrow">YOUR ORDER</span>

              <h2>Order Summary</h2>

              <div className="checkout-summary-items">
                {cart.map((item) => (
                  <div
                    className="checkout-summary-item"
                    key={item.cartItemId || item.id}
                  >
                    <div className="checkout-summary-image">
                      <img src={item.image} alt={item.nameEn} />
                    </div>

                    <div className="checkout-summary-info">
                      <p className="checkout-summary-amharic">{item.nameAm}</p>

                      <h3>{item.nameEn}</h3>

                      <span>Qty: {item.quantity}</span>

                      <strong>
                        {Number(
                          item.priceETB * Number(item.quantity || 1),
                        ).toLocaleString()}{" "}
                        ETB
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

              {cart.some((item) => item.extras && item.extras.length > 0) && (
                <div className="checkout-extras">
                  <h3>Extras</h3>

                  {cart.map((item) =>
                    item.extras?.map((extra) => (
                      <div
                        className="checkout-extra"
                        key={`${item.cartItemId || item.id}-${extra.nameEn}`}
                      >
                        <span>
                          {extra.nameEn} × {extra.quantity || 1}
                        </span>

                        <strong>
                          {Number(
                            extra.priceETB * Number(extra.quantity || 1),
                          ).toLocaleString()}{" "}
                          ETB
                        </strong>
                      </div>
                    )),
                  )}
                </div>
              )}

              {/* NOTES */}
              {cart.some((item) => item.note) && (
                <div className="checkout-notes">
                  <h3>Special Notes</h3>

                  {cart
                    .filter((item) => item.note)
                    .map((item) => (
                      <p key={item.cartItemId || item.id}>
                        <strong>{item.nameEn}:</strong> {item.note}
                      </p>
                    ))}
                </div>
              )}

              <div className="checkout-price-breakdown">
                <div>
                  <span>Dishes</span>

                  <strong>{Number(dishesTotal).toLocaleString()} ETB</strong>
                </div>

                <div>
                  <span>Extras</span>

                  <strong>{Number(extrasTotal).toLocaleString()} ETB</strong>
                </div>

                <div className="checkout-divider"></div>

                <div className="checkout-total">
                  <span>Total</span>

                  <strong>{Number(cartTotal).toLocaleString()} ETB</strong>
                </div>
              </div>

              <Link to="/cart" className="edit-cart-link">
                Edit Cart
              </Link>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
