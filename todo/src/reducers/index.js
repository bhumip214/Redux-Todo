import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [{ value: "", completed: false }]
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case ADD_TODO:
      console.log("add_Todo", action);
      const newTodo = {
        value: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case TOGGLE_TODO:
      console.log("toggle_Todo", action);
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    default:
      return state;
  }
};

export default reducer;
