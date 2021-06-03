import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = () => {
  const todos = useSelector(state => state)
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Add Todos</Text>
      <TextInput
      placeholder="Enter to-do here"
      />
      <Button
      title="Add to-do"
      onPress={() => dispatch({ type: 'ADD_TODO'})}
      />
      {/*  DELETE THE BELOW BEFORE FINISHING */}
      <Button
      title="Clear to-dos for development ease"
      onPress={() => dispatch({ type: 'CLEAR_TODOS'})}
      />
      <View>
        {todos.map((todo) => <Text>{todo}</Text>)}
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