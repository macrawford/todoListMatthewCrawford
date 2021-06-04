export const GET_TODOS = 'GET_TODOS';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {usedKeys} from './addTodo'

export const getTodos = async () => {
  try {
    // const keys = await AsyncStorage.getAllKeys(usedKeys);
    const value = await AsyncStorage.multiGet(usedKeys)
    return value;
  } catch(e) {
    console.log('e: ', e)
  }
}

// export const getTodos = () => {
//   return async dispatch => {
//     {type: GET_TODOS}
//   }
// };