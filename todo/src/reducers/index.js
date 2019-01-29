import { ADD_TODO } from "../actions";

const initialState = {
  todos: [{ value: "", completed: false }]
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case ADD_TODO:
      console.log("add_Todo", action);
      const newTodo = { value: action.payload, completed: false };
      return { ...state, todos: [...state.todos, newTodo] };
    default:
      return state;
  }
};

export default reducer;
