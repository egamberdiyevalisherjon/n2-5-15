import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/todo.slice";
import settingsReducer from './Slices/settings.slice';
const store = configureStore({
  reducer: {
    todo: todoReducer,
    settings: settingsReducer,
  },
});
export default store;