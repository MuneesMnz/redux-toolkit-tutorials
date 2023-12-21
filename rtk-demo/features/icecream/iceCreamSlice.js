const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;
const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    reStocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCream--;
  //     },
  //   },

  //   extraReducers is a function that takes a builder argument. The builder is an object provided by the createSlice library that
  //  allows you to add additional reducer logic.
  extraReducers: (builder) => {
    //  addCase method is used to add a case to the extra reducers. It takes two arguments:
    // 1 The first argument is the action type or action creator to match.
    // 2.The second argument is a callback function that describes how the state should be updated when the specified action is dispatched 
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCream--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
