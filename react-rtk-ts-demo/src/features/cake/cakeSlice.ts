import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const createSlice = require("@reduxjs/toolkit").createSlice;

type InitialState = {
  numOfCakes: number;
};

//This is the initial state for the cake slice.
const initialState: InitialState = {
  numOfCakes: 10,
};

// This function is used to create a Redux slice, which includes a reducer and action creators.
//  It takes an object with properties like name, initialState, and reducers
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    reStocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, reStocked } = cakeSlice.actions;
