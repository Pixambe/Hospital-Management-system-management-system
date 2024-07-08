
//import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
//import rootReducer from './redux'; // Import your combined reducers
import patientsDetails from './slices/patientsSlice';
import bookingSlice from './slices/bookingSlice'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  patients: patientsDetails,
  bookings: bookingSlice,
  // Add other reducers if needed
})
const store = configureStore({
    reducer: rootReducer
  });
  
  export default store;


