import { TProducts } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  cart: TProducts[];
};

const initialState: TInitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<TProducts>) {
      const index = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      console.log("index", index);

      if (index !== -1) {
        state.cart[index].qty += action.payload.qty;
      } else if (index === -1) {
        state.cart.push({ ...action.payload });
      }
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
