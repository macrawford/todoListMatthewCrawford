import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getTodos} from '../store/actions/todos.js';
import {addTodo} from '../store/actions/addTodo.js'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// BREAK TODO HEADER, INPUT BOX/SUBMIT BUTTON, AND TODOS WITH THEIR CORRESPONDING EDIT/DELETE, ETC AS THEIR OWN COMPONENTS

const HomeScreen = () => {
  const todos = useSelector(state => state);
  // use Effect to fetch todos on initial load
  // FIRST, set items to the database when you add an item
  useEffect(() => {
    getTodos()
    .then((response) => {
      response.map((pair) => {
        console.log('pair value: ', pair[0], pair[1])
        dispatch({ type: 'ADD_TODO', payload: {id: Number(pair[0]), description: pair[1]}});
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  const [currentTodo, setCurrentTodo] = useState('');
  const dispatch = useDispatch();
  const handleChangeTodo = (e) => {
    setCurrentTodo(e)
  };
  // const addTodo = (text) => {
  //   return {
  //     type: 'ADD_TODO',
  //     text
  //   }
  // }
  const handleEdit = (id, description) => {
    setCurrentTodo(description);
    dispatch({ type: 'DELETE_TODO', payload: {id: id}});
  }
  const handleSubmit = () => {
    dispatch({ type: 'ADD_TODO', payload: {description: currentTodo}});
    addTodo(currentTodo)
    setCurrentTodo('');
  }
  return (
    <ScrollView >
      <View style={styles.container}>
        <Text>
          Add Todos
        </Text>
        <TextInput placeholder="Enter to-do here" value={currentTodo} autoCorrect={false} onChangeText={(e) => handleChangeTodo(e)}/>
        <Button title="Add to-do" onPress={() => handleSubmit()}/>
        {/*  DELETE THE BELOW BEFORE FINISHING */}
        <Button title="Clear all to-do's" onPress={() => dispatch({ type: 'CLEAR_TODOS'})}/>
        <View>
          {todos.map((todo) =>
            <View key={todo.id}>
              <Text>{todo.description}{todo.completed ? <Text> Completed</Text> : <Text> Not Completed</Text>}</Text>
              <Button title="Delete To-do" onPress={() => dispatch({ type: 'DELETE_TODO', payload: {id: todo.id}})} />
              <Button title="Toggle completed" onPress={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: {id: todo.id, completed: todo.completed}})}/>
              <Button title="Edit To-Do" onPress={() => handleEdit(todo.id, todo.description)}/>
            </View>)}
        </View>
      </View>
    </ScrollView>
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