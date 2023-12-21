const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qtr = 1) {
  return {
    type: CAKE_RESTOCK,
    payload: qtr,
  };
}
function orderIcecream(qtr = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qtr,
  };
}
function restockIcecream(qtr = 1) {
  return {
    type: ICECREAM_RESTOCK,
    payload: qtr,
  };
}
// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    case ICECREAM_RESTOCK:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducers, applyMiddleware(logger));

console.log("initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log("update state", store.getState());
});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderIcecream();
actions.orderIcecream();
actions.restockCake(3);
actions.restockIcecream(2);

unsubscribe();
