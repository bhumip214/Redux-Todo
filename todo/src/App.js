import React, { Component } from "react";
import { connect } from "react-redux";
import TodoForm from "./components/TodoForm";
import { addNewTodo } from "./actions";
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

  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <div>
          {this.props.todos.map((todo, index) => (
            <h4 key={index}> {todo.value} </h4>
          ))}
        </div>
        <TodoForm
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          newTodo={this.state.newTodo}
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
  { addNewTodo }
)(App);
