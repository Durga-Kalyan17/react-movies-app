// store.js

// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  date: "null",
  time: "null",
};

const countReducer = (state = initialState, action) => {

  console.log("store date - " + action.date);
  console.log("store time - " + action.time);

  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: Math.max(0, state.count - 1) };
    case 'SELECT_DATE':
      return { ...state, date: action.date }
    case 'SELECT_TIME':
      return { ...state, time: action.time }
    default:
      return state;
  }
};


// const store = createStore(countReducer);
const store = configureStore({
  reducer: countReducer,
});


export default store;
