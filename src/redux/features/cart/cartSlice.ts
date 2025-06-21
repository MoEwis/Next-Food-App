import { Extra, Size } from "@/generated/prisma";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
export interface CartItem {
  id: string;
  name: string;
  basePrice: number;
  image: string;
  quantity?: number;
  size?: Size;
  extras?: Extra[];
}

interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
