import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// BREAK TODO HEADER, INPUT BOX/SUBMIT BUTTON, AND TODOS WITH THEIR CORRESPONDING EDIT/DELETE, ETC AS THEIR OWN COMPONENTS

const HomeScreen = () => {
  const todos = useSelector(state => state);
  const [currentTodo, setCurrentTodo] = useState('');
  const dispatch = useDispatch();
  const handleChangeTodo = (e) => {
    setCurrentTodo(e)
  };
  const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      text
    }
  }
  return (
    <View style={styles.container}>
      <Text>
        Add Todos
      </Text>
      <TextInput placeholder="Enter to-do here" onChangeText={(e) => handleChangeTodo(e)}/>
      <Button title="Add to-do" onPress={() => dispatch({ type: 'ADD_TODO', payload: {description: currentTodo}})}/>
      {/*  DELETE THE BELOW BEFORE FINISHING */}
      <Button title="Clear to-dos for development ease" onPress={() => dispatch({ type: 'CLEAR_TODOS'})}/>
      <View>
        {todos.map((todo) => <Text key={todo.id}>{todo.description}</Text>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default HomeScreen;