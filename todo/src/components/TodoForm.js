import React from "react";

function TodoForm(props) {
  return (
    <div className="todoBar">
      <input
        className="addTodo"
        value={props.newTodo}
        type="text"
        placeholder="Add..."
        onChange={props.handleChanges}
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed </button>
    </div>
  );
}

export default TodoForm;
