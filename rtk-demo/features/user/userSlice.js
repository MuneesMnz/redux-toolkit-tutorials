const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncthunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

// initial state 
const initialState = {
  laoding: false,
  users: [],
  error: "",
};

//Generate pending,fulfill and rejected action types
const fetchUsers = createAsyncthunk("user/fetchUser", () => {
  //createAsyncThunk is used for async functions like api call it return
  // pending,fullfill,rejected methods when we return requst made function
  //in here return is compalsary
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user) => user.id));
});


// user Slice 
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      //pending means when request is made
      .addCase(fetchUsers.pending, (state) => {
        state.laoding = true;
      })
      //fullfilled means when request is completed
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.laoding = false;
        state.users = action.payload;
        state.error = "";
      })
      //rejected means when request is failed
      .addCase(fetchUsers.rejected, (state, action) => {
        state.laoding = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
