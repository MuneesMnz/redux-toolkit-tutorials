import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
// const createAsyncthunk = require("@reduxjs/toolkit").createAsyncThunk;
// const axios = require("axios");

// TYPE INITILAIZE IN TYPESCRIPT
// TypeScript provides static typing, which helps catch potential errors during development.
//  By defining the InitialState type, you ensure that objects representing the initial state
//  adhere to a specific structure.

type User = {
  id: number;
  name: string;
};

type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};

// initial state
const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

//Generate pending,fulfill and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUser", () => {
  //createAsyncThunk is used for async functions like api call it return
  // pending,fullfill,rejected methods when we return requst made function
  //in here return is compalsary
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

// user Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}, //it is mandotory in typescript so just initialize it
  extraReducers: (builder) => {
    builder
      //pending means when request is made
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      //fullfilled means when request is completed
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
      //rejected means when request is failed
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message || "something went wrong";
      });
  },
});

export default userSlice.reducer;
