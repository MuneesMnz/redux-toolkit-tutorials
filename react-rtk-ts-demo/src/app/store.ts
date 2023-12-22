// const configureStore = require("@reduxjs/toolkit").configureStore;
// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();
import userReducer from "../features/user/userSlice";

// Store likely refers to a Redux store. In Redux, a store holds the state of your
//  application and provides methods to update the state.
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: userReducer,
  },
  //This is an option or configuration setting for creating a Redux store using configureStore from the @reduxjs/toolkit library.

  // "getDefaultMiddleware().concat(logger)"
  //This line is using getDefaultMiddleware to get the default middleware array
  //   and then concatenating it with an additional middleware, logger.
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
