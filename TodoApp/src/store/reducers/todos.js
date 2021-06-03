import { GET_TODOS } from '../actions/todos';

const initialState = ['Redux todos'];

export const getTodos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return initialState;
    default:
      return state
  }
}