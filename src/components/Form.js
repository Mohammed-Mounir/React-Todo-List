import React from "react";
import { v1 as uuidv1 } from "uuid";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    let id = uuidv1();
    setTodos([...todos, { text: inputText, completed: false, id }]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <section>
      <form className="row g-3 my-3">
        <div className="col-6 p-0">
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className="form-control"
            placeholder="Type here new to-do!"
            aria-label="new to-do"
            aria-describedby="button-addon2"
          />
        </div>
        <div className="col-1 p-0 pe-3">
          <button
            onClick={submitTodoHandler}
            type="submit"
            className="btn btn-primary"
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </div>

        <div className="col-5">
          <select
            onChange={statusHandler}
            name="todos"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default Form;
