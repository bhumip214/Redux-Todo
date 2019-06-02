import React from "react";
import { Button } from "reactstrap";

function TodoForm(props) {
  return (
    <div className="todoForm">
      <input
        className="addTodo"
        value={props.newTodo}
        type="text"
        placeholder="Add..."
        onChange={props.handleChanges}
      />
      <Button color="primary" className="btn_primary" onClick={props.addTodo}>
        Add Todo
      </Button>
      <Button
        color="danger"
        className="btn_danger"
        onClick={props.clearCompleted}
      >
        Clear Completed
      </Button>
    </div>
  );
}

export default TodoForm;
