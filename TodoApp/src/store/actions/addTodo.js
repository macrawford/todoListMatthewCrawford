export const ADD_TODO = 'ADD_TODO';
import AsyncStorage from '@react-native-async-storage/async-storage';

export let id = 0;
export var usedKeys = [];


export const addTodo = async (value) => {
  try {
    await AsyncStorage.setItem(id.toString(), value)
    usedKeys.push(id.toString())
    id++;
  } catch (e) {
    console.log('e: ', e)
    alert('Failed to save data')
  }
};