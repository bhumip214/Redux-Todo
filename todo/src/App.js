import React, { Component } from "react";
import { connect } from "react-redux";
import TodoForm from "./components/TodoForm";
import { addNewTodo, toggleTodo, removeTodo } from "./actions";
import "./App.css";

class App extends Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  toggleTodo = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index);
  };

  clearCompleted = e => {
    e.preventDefault();
    this.props.removeTodo(this.state.newTodo);
  };

  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <div>
          {this.props.todos.map((todo, index) => (
            <h4
              onClick={e => this.toggleTodo(e, index)}
              className={todo.completed ? "completedTodo" : "none"}
              key={index}
            >
              {todo.value}
            </h4>
          ))}
        </div>
        <TodoForm
          newTodo={this.state.newTodo}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo, toggleTodo, removeTodo }
)(App);
