import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../features/emailReducer';
import userReducer from '../features/userReducer';


export const store = configureStore({
  reducer: {
    email: emailReducer,
    user: userReducer,
  },
});
