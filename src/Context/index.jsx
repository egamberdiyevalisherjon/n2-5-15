import { useState } from "react";
import { createContext } from "react";
export const TodoContext = createContext([]);
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
