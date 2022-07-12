import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state) => state.cart.cartItem;

export const cartItemCountSelector = createSelector(
  cartItemSelector,
  (cartItem) =>
    cartItem.reduce((count, item) => {
      return count + item.quantity;
    }, 0)
);

export const cartTotalSelector = createSelector(cartItemSelector, (cartItem) =>
  cartItem.reduce((total, item) => {
    return total + item.product.salePrice * item.quantity;
  }, 0)
);
