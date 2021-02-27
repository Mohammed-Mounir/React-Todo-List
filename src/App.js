import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todos) => todos.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todos) => todos.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let savedLocalTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(savedLocalTodos);
    }
  };

  const resetLocalTodos = () => {
    if (JSON.parse(localStorage.getItem("todos")).length !== 0) {
      setTodos([]);
      localStorage.setItem("todos", JSON.stringify([]));
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                To-do List using React By Mohammed Mounir
              </a>
              <button onClick={resetLocalTodos} className="btn btn-danger mb-3">
                Reset To-do List
              </button>
            </div>
          </nav>
        </div>
        <div className="row">
          <main className="col-12 d-flex flex-column align-items-center justify-content-center my-5">
            <h1>To-do List</h1>

            <Form
              inputText={inputText}
              todos={todos}
              setTodos={setTodos}
              setInputText={setInputText}
              setStatus={setStatus}
            />
            <TodoList
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
            />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
