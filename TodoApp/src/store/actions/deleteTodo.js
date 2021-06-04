export const DELETE_TODO = 'DELETE_TODO';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const deleteTodo = async (id) => {
  try {
    await AsyncStorage.removeItem(id.toString())
  } catch(e) {
    console.log('e: ', e)
  }
};