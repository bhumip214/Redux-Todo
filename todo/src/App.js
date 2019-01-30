import React, { Component } from "react";
import { connect } from "react-redux";
import TodoForm from "./components/TodoForm";
import { addNewTodo, toggleTodo, removeTodo } from "./actions";
import "./App.css";
import { ListGroupItem, Alert } from "reactstrap";

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
        <header>
          <h2>Todo List</h2>

          <TodoForm
            newTodo={this.state.newTodo}
            handleChanges={this.handleChanges}
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
          />
        </header>
        <div className="todos">
          {this.props.todos.map((todo, index) => (
            //<ListGroupItem>
            <h4
              onClick={e => this.toggleTodo(e, index)}
              className={todo.completed ? "completedTodo" : ""}
              key={index}
            >
              <Alert color="success">{todo.value}</Alert>
            </h4>
            //</ListGroupItem>
          ))}
        </div>
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
