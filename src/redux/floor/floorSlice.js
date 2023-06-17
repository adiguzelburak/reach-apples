import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  floorList: [],
};

export const floorSlice = createSlice({
  name: "floor",
  initialState,
  reducers: {
    addAppleFloor: (state, action) => {
      state.floorList = [...state.floorList, action.payload];
    },
    deleteAppleFloor: (state, action) => {
      state.floorList = state.floorList.filter(
        (apple, index) => index !== action.payload
      );
    },
  },
});


export const { addAppleFloor, deleteAppleFloor } = floorSlice.actions;

export default floorSlice.reducer;
