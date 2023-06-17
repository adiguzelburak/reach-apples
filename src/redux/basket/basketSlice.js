import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketList: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addAppleBasket: (state, action) => {
      state.basketList = [...state.basketList, action.payload];
    },
    deleteAppleBasket: (state, action) => {
      state.basketList = state.basketList.filter(
        (apple, index) => index !== action.payload
      );
    },
  },
});

export const { addAppleBasket, deleteAppleBasket } = basketSlice.actions;

export default basketSlice.reducer;
