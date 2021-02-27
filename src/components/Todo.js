import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="card alert alert-primary">
      <div className="card-body">
        <ul className="row list-unstyled align-items-center">
          <li
            className={`col-6 fs-3 ${
              todo.completed ? "text-decoration-line-through text-muted" : ""
            }`}
          >
            {text}
          </li>

          <li className="col-3 ">
            <button onClick={completeHandler} className="btn btn-success ">
              <i
                className={`${todo.completed ? "fas fa-undo" : "fas fa-check"}`}
              ></i>
            </button>
          </li>

          <li className="col-3">
            <button
              onClick={deleteHandler}
              className="btn btn-danger trash-btn"
            >
              <i className="fas fa-trash"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
