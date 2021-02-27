import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <section>
      {filteredTodos.map((todo) => (
        <Todo
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          key={todo.id}
          text={todo.text}
        />
      ))}
    </section>
  );
};

export default TodoList;
