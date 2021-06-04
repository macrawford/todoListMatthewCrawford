import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getTodos} from '../store/actions/todos.js';
import {deleteTodo} from '../store/actions/deleteTodo.js'
import {addTodo, usedKeys, id} from '../store/actions/addTodo.js'
// import {store} from '../store/index.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// BREAK TODO HEADER, INPUT BOX/SUBMIT BUTTON, AND TODOS WITH THEIR CORRESPONDING EDIT/DELETE, ETC AS THEIR OWN COMPONENTS

const HomeScreen = () => {
  const todos = useSelector(state => state);
  useEffect(() => {
    getTodos()
    .then((response) => {
      response.map((pair) => {
        console.log('pair value: ', pair[0], ', ', pair[1])
        if (Number(pair[0])) {
          console.log('number! ', pair[0], pair[1])
          dispatch({ type: 'ADD_TODO', payload: {id: Number(pair[0]), description: pair[1]}});
        }
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

  const handleEdit = (id, description) => {
    setCurrentTodo(description);
    deleteTodo(id)
    dispatch({ type: 'DELETE_TODO', payload: {id: id}});
  }
  const handleSubmit = () => {
    if (currentTodo !== '') {
      addTodo(currentTodo);
      dispatch({ type: 'ADD_TODO', payload: {description: currentTodo}})
      setCurrentTodo('');
    }
  }
  handleDelete = (id) => {
    deleteTodo(id)
    dispatch({ type: 'DELETE_TODO', payload: {id: id}})
  }
  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
      <View>
        <View style={styles.inputAndButtons}>
          <Text style={styles.todoTitle}>
            To-Do List!
          </Text>
          <TextInput placeholder="Enter To-Do here" value={currentTodo} autoCorrect={false} onChangeText={(e) => handleChangeTodo(e)}/>
          <View style={styles.headerButtons}>
            <Button title="Add to-do" onPress={() => handleSubmit()}/>
            {/*  DELETE THE BELOW BEFORE FINISHING */}
            <Button title="Clear all to-do's" onPress={() => dispatch({ type: 'CLEAR_TODOS'})}/>
          </View>
        </View>
        <View>
          {todos.map((todo) =>
            <View key={todo.id} style={styles.indivTodo}>
              <Text>{todo.description}{todo.completed ? <Text style={styles.completed}> Completed</Text> : <Text style={styles.notCompleted}> Not Completed</Text>}</Text>
              <View style={styles.buttons}>
                <Button title="Delete To-Do" onPress={() => handleDelete(todo.id)} />
                <Button title="Toggle Completed" onPress={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: {id: todo.id, completed: todo.completed}})}/>
                <Button title="Edit To-Do" onPress={() => handleEdit(todo.id, todo.description)}/>
              </View>
            </View>)}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  inputAndButtons: {
    alignItems: "center",
    marginTop: 30
  },
  headerButtons: {
    flexDirection: "row"
  },
  todoTitle: {
    fontSize: 30,
    alignItems: "center"
  },
  scrollView: {
    margin: 20,
    alignSelf: 'center'
  },
  view: {
    flex: 1
  },
  indivTodo: {
    display: 'flex',
    alignItems: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontSize: 10
  },
  completed: {
    color: 'green',
    fontSize: 10
  },
  notCompleted: {
    color: 'red',
    fontSize: 10
  }
})

export default HomeScreen;