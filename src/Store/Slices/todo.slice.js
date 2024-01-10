import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todo Slice",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});
const todoReducer = todoSlice.reducer;
export default todoReducer;
export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
