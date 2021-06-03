export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const toggleCompleted = () => {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      id,
      completed
    }
  }
};