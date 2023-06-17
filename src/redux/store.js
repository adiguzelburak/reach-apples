import { configureStore } from "@reduxjs/toolkit";
import treeReducer from "./tree/treeSlice";
import floorReducer from "./floor/floorSlice";
import basketReducer from "./basket/basketSlice";

export const store = configureStore({
  reducer: {
    tree: treeReducer,
    floor: floorReducer,
    basket: basketReducer,
  },
});
