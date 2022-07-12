import counterSlice from "../features/Counter/counterSlice";
import userSlice from "../features/Auth/userSlice";
import cartSlice from "../features/Cart/cartSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  counter: counterSlice,
  user: userSlice,
  cart: cartSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
