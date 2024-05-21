import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createSlice, configureStore } from 'redux-toolkit'
import { Provider } from 'react-redux'

//action
const counterSlice = createSlice({
  name: 'counter', 
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    } 
  }    
})

export const {decrement, increment} = counterSlice.action;
//reducer

//store

const store = configureStore({
  red: counterSlice.reducer
});


store.subscribe(() => console.log(store.getState()))
store.dispatch(increment)

//dispatch

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <h1>Hello</h1>
    <App />
  </Provider>
);