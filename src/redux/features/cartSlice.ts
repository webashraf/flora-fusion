import { TProduct } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  cart: TProduct[];
};

const initialState: TInitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<TProduct>) => {
      const index = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      console.log("index", state, index);

      if (index !== -1) {
        state.cart[index].qty += action.payload.qty;
      } else if (index === -1) {
        state.cart.push({ ...action.payload });
      }
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
  },
});

export const { setCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
