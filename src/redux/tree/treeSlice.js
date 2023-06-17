import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  treeList: [
    { id: 0, onFloor: false },
    { id: 1, onFloor: false },
    { id: 2, onFloor: false },
  ],
};

export const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    addAppleTree: (state, action) => {
      state.treeList = [...state.treeList, action.payload];
    },
    deleteAppleTree: (state, action) => {
      state.treeList = state.treeList.filter(
        (apple, index) => index !== action.payload
      );
    },
    updateAppleOnFloor: (state, action) => {
      if (state.treeList[0]) {
        state.treeList[0].onFloor = action.payload.onFloor;
      }
    },
  },
});

export const { addAppleTree, deleteAppleTree, updateAppleOnFloor } =
  treeSlice.actions;

export default treeSlice.reducer;
