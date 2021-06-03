import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const HomeScreen = () => {
  const [todos, setTodos] = useState(['Do laundry', 'grocery shop'])
  return (
    <View style={styles.container}>
      <Text>Add Todos</Text>
      <TextInput
      placeholder="Enter to-do here"
      />
      <View>
        {todos.map((todo) => {
          return (
            <Text>{todo}</Text>
          )
        })}
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