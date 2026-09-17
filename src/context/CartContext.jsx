import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add a normal dish directly to the cart
  function addToCart(dish) {
    const cartItem = {
      ...dish,
      cartItemId: `${dish.id}-${Date.now()}-${Math.random()}`,
      quantity: 1,
      extras: [],
      extrasTotal: 0,
      note: "",
      totalPrice: Number(dish.priceETB),
    };

    setCart((currentCart) => [...currentCart, cartItem]);
  }

  // Add a dish configured from the Dish Details page
  function addConfiguredItem(item) {
    const extras = item.extras || [];

    const extrasTotal = extras.reduce(
      (total, extra) =>
        total + Number(extra.priceETB || 0) * Number(extra.quantity || 1),
      0,
    );

    const quantity = Number(item.quantity || 1);

    const totalPrice = Number(item.priceETB || 0) * quantity + extrasTotal;

    const cartItem = {
      ...item,
      cartItemId: `${item.id}-${Date.now()}-${Math.random()}`,
      quantity,
      extras,
      extrasTotal,
      totalPrice,
      note: item.note || "",
    };

    setCart((currentCart) => [...currentCart, cartItem]);
  }

  // Recalculate the complete price of one cart item
  function calculateTotal(item, quantity) {
    const extrasTotal = (item.extras || []).reduce(
      (total, extra) =>
        total + Number(extra.priceETB || 0) * Number(extra.quantity || 1),
      0,
    );

    return Number(item.priceETB || 0) * quantity + extrasTotal;
  }

  // Increase main dish quantity
  function increaseQuantity(cartItemId) {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.cartItemId !== cartItemId) {
          return item;
        }

        const quantity = Number(item.quantity) + 1;

        return {
          ...item,
          quantity,
          totalPrice: calculateTotal(item, quantity),
        };
      }),
    );
  }

  // Decrease main dish quantity
  function decreaseQuantity(cartItemId) {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.cartItemId !== cartItemId) {
            return item;
          }

          if (Number(item.quantity) <= 1) {
            return null;
          }

          const quantity = Number(item.quantity) - 1;

          return {
            ...item,
            quantity,
            totalPrice: calculateTotal(item, quantity),
          };
        })
        .filter(Boolean),
    );
  }

  // Remove one complete configured cart item
  function removeFromCart(cartItemId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartItemId !== cartItemId),
    );
  }

  // Change quantity of an extra
  function increaseExtraQuantity(cartItemId, extraId) {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.cartItemId !== cartItemId) {
          return item;
        }

        const updatedExtras = (item.extras || []).map((extra) => {
          if (extra.id !== extraId) {
            return extra;
          }

          return {
            ...extra,
            quantity: Number(extra.quantity || 1) + 1,
          };
        });

        const updatedItem = {
          ...item,
          extras: updatedExtras,
        };

        const extrasTotal = updatedExtras.reduce(
          (total, extra) =>
            total + Number(extra.priceETB || 0) * Number(extra.quantity || 1),
          0,
        );

        return {
          ...updatedItem,
          extrasTotal,
          totalPrice:
            Number(item.priceETB || 0) * Number(item.quantity || 1) +
            extrasTotal,
        };
      }),
    );
  }

  function decreaseExtraQuantity(cartItemId, extraId) {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.cartItemId !== cartItemId) {
          return item;
        }

        const updatedExtras = (item.extras || [])
          .map((extra) => {
            if (extra.id !== extraId) {
              return extra;
            }

            return {
              ...extra,
              quantity: Number(extra.quantity || 1) - 1,
            };
          })
          .filter((extra) => Number(extra.quantity) > 0);

        const extrasTotal = updatedExtras.reduce(
          (total, extra) =>
            total + Number(extra.priceETB || 0) * Number(extra.quantity || 1),
          0,
        );

        return {
          ...item,
          extras: updatedExtras,
          extrasTotal,
          totalPrice:
            Number(item.priceETB || 0) * Number(item.quantity || 1) +
            extrasTotal,
        };
      }),
    );
  }

  // Remove one extra completely
  function removeExtra(cartItemId, extraId) {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.cartItemId !== cartItemId) {
          return item;
        }

        const extras = (item.extras || []).filter(
          (extra) => extra.id !== extraId,
        );

        const extrasTotal = extras.reduce(
          (total, extra) =>
            total + Number(extra.priceETB || 0) * Number(extra.quantity || 1),
          0,
        );

        return {
          ...item,
          extras,
          extrasTotal,
          totalPrice:
            Number(item.priceETB || 0) * Number(item.quantity || 1) +
            extrasTotal,
        };
      }),
    );
  }

  // Update special note for a cart item
  function updateNote(cartItemId, note) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.cartItemId === cartItemId ? { ...item, note } : item,
      ),
    );
  }

  function clearCart() {
    setCart([]);
  }

  // Total number of dishes in cart
  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0,
  );

  // Complete cart price
  const cartTotal = cart.reduce(
    (total, item) => total + Number(item.totalPrice || 0),
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,

        addToCart,
        addConfiguredItem,

        increaseQuantity,
        decreaseQuantity,

        increaseExtraQuantity,
        decreaseExtraQuantity,
        removeExtra,

        removeFromCart,
        updateNote,
        clearCart,

        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
