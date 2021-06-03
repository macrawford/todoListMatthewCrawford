import { GET_TODOS } from '../actions/todos';
import { ADD_TODO } from '../actions/addTodo';
import { CLEAR_TODOS } from '../actions/clearTodos';

const initialState = [];
// change initial state to empty array eventually
let lastId = 0;

export const getTodos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return initialState;
    case ADD_TODO:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          completed: false
        }
      ]
    case CLEAR_TODOS:
      return initialState;
    default:
      return state
  }
}