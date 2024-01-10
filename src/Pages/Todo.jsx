import { useContext } from "react";
import { TodoContext } from "../Context";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addTodo,
//   deleteTodo,
//   toggleComplete,
// } from "../Store/Slices/todo.slice";

const Todo = ({ todo }) => {
  // const dispatch = useDispatch();
  const handleDelete = () => {
    // dispatch(deleteTodo(todo.id));
  };
  const { toggleComplete } = useContext(TodoContext);

  const handleCheck = () => {
    // dispatch(toggleComplete(todo.id));
    toggleComplete(todo.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className={todo.isCompleted ? "text-decoration-line-through" : ""}>
        {todo.title}
      </span>
      <div className="actions d-flex gap-3">
        <button className="btn btn-info" onClick={handleCheck}>
          <i className="fa-solid fa-check"></i>
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          <i className="fa-solid fa-times"></i>
        </button>
      </div>
    </li>
  );
};

const TodoApp = () => {
  const { todos, addTodo } = useContext(TodoContext);

  // const todos = useSelector((store) => store.todo);
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;

    if (!title) return alert("Input is required!");

    const newTodo = { id: crypto.randomUUID(), title, isCompleted: false };

    // dispatch(addTodo(newTodo));
    addTodo(newTodo);

    e.target.reset();
  };

  return (
    <>
      <h1 className="text-center">Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Write a todo..."
          />
          <button className="btn btn-success">Add</button>
        </div>
      </form>
      <ul className="list-group my-3">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
