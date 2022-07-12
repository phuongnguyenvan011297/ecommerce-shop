import React from "react";
import TodoForm from "./components/TodoForm";

Todo.propTypes = {};

function Todo(props) {
  const handleTodoSubmit = (values) => {
    console.log("Form submit: ", values);
  };

  return (
    <div>
      Todo
      <div>
        What to do:
        <TodoForm onSubmit={handleTodoSubmit} />
      </div>
    </div>
  );
}

export default Todo;
