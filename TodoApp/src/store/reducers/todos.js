import { GET_TODOS } from '../actions/todos';
import { ADD_TODO } from '../actions/addTodo';
import { CLEAR_TODOS } from '../actions/clearTodos';

const initialState = ['Redux todos'];

export const getTodos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return initialState;
    case ADD_TODO:
      return [...state, 'Another todo']
    case CLEAR_TODOS:
      return ['Redux todos']
    default:
      return state
  }
}