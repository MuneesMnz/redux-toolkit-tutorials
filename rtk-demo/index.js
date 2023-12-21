const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions;

const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initialstate", store.getState());

// This method is used to add a change listener to the store.
//  It means that whenever an action is dispatched and the state in the store changes,
//  the provided callback function will be invoked
const unSubsribe = store.subscribe(() => {
  console.log("updatedState", store.getState());
});


// Dispatch is a method provided by the Redux store. It is used to dispatch actions to the store.
// An action is a plain JavaScript object that describes the change you want to make. Actions are typically
//  created by action creator functions
store.dispatch(fetchUsers());


// cake Actions 
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.reStocked(3));

// IceCream Actions 
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.reStocked(5));

// Some time later, you may want to unsubscribe
// For example, when the component is unmounted
// or when a certain condition is met
// unSubsribe();
