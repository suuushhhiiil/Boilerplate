import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/dataReducer';

const store = configureStore({reducer:rootReducer});

export default store;
