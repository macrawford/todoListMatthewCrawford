export const EDIT_TODO = 'EDIT_TODO';

export const editTodo = () => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      description
    }
  }
};