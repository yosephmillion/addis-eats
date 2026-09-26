import { create } from "zustand";
import { persist } from "zustand/middleware";

function createCartItemId(item) {
  const extrasKey = (item.extras || [])
    .map((extra) => `${extra.nameEn}:${extra.quantity || 1}`)
    .sort()
    .join("|");

  const noteKey = (item.note || "").trim();

  return `${item.id}__${extrasKey}__${noteKey}`;
}

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (dish) => {
        const item = {
          ...dish,
          quantity: 1,
          extras: dish.extras || [],
          note: "",
        };

        const cartItemId = createCartItemId(item);

        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.cartItemId === cartItemId,
          );

          if (existingItem) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem.cartItemId === cartItemId
                  ? {
                      ...cartItem,
                      quantity: Number(cartItem.quantity) + 1,
                    }
                  : cartItem,
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...item,
                cartItemId,
              },
            ],
          };
        });
      },

      addConfiguredItem: (item) => {
        const normalizedItem = {
          ...item,
          quantity: Number(item.quantity || 1),
          extras: item.extras || [],
          note: item.note || "",
        };

        const cartItemId = createCartItemId(normalizedItem);

        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.cartItemId === cartItemId,
          );

          if (existingItem) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem.cartItemId === cartItemId
                  ? {
                      ...cartItem,
                      quantity:
                        Number(cartItem.quantity) +
                        Number(normalizedItem.quantity),
                    }
                  : cartItem,
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...normalizedItem,
                cartItemId,
              },
            ],
          };
        });
      },

      increaseQuantity: (cartItemId) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  quantity: Number(item.quantity) + 1,
                }
              : item,
          ),
        }));
      },

      decreaseQuantity: (cartItemId) => {
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.cartItemId === cartItemId
                ? {
                    ...item,
                    quantity: Math.max(0, Number(item.quantity) - 1),
                  }
                : item,
            )
            .filter((item) => Number(item.quantity) > 0),
        }));
      },

      removeFromCart: (cartItemId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.cartItemId !== cartItemId),
        }));
      },

      increaseExtraQuantity: (cartItemId, extraName) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  extras: (item.extras || []).map((extra) =>
                    extra.nameEn === extraName
                      ? {
                          ...extra,
                          quantity: Number(extra.quantity || 1) + 1,
                        }
                      : extra,
                  ),
                }
              : item,
          ),
        }));
      },

      decreaseExtraQuantity: (cartItemId, extraName) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  extras: (item.extras || [])
                    .map((extra) =>
                      extra.nameEn === extraName
                        ? {
                            ...extra,
                            quantity: Math.max(
                              0,
                              Number(extra.quantity || 1) - 1,
                            ),
                          }
                        : extra,
                    )
                    .filter((extra) => Number(extra.quantity) > 0),
                }
              : item,
          ),
        }));
      },

      removeExtra: (cartItemId, extraName) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  extras: (item.extras || []).filter(
                    (extra) => extra.nameEn !== extraName,
                  ),
                }
              : item,
          ),
        }));
      },

      updateNote: (cartItemId, note) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  note,
                }
              : item,
          ),
        }));
      },

      clearCart: () => {
        set({ cart: [] });
      },

      getCartCount: () => {
        return get().cart.reduce(
          (total, item) => total + Number(item.quantity || 0),
          0,
        );
      },

      getCartTotal: () => {
        return get().cart.reduce((total, item) => {
          const itemPrice =
            Number(item.priceETB || 0) * Number(item.quantity || 0);

          const extrasTotal = (item.extras || []).reduce(
            (extraTotal, extra) =>
              extraTotal +
              Number(extra.priceETB || 0) * Number(extra.quantity || 1),
            0,
          );

          return total + itemPrice + extrasTotal;
        }, 0);
      },
    }),
    {
      name: "addis-eats-cart",
    },
  ),
);
