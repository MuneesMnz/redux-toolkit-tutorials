const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddleware = require("redux-thunk");
const axios = require("axios");
const applyMIddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const FETCH_USER_REQUSET = "FETCH_USER_REQUSET";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUSET,
  };
};

const fetchUsersSucceeded = (user) => {
  return {
    type: FETCH_USER_SUCCEEDED,
    payload: user,
  };
};
const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUSET:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEEDED:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .getAdapter("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUsersSucceeded(users));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchUsersFailed(err.message));
      });
  };
};

const store = createStore(reducer, applyMIddleware(thunkMiddleware));

store.subscribe(() => {
  console.log("initial State", store.getState());
});

store.dispatch(fetchUsers());
