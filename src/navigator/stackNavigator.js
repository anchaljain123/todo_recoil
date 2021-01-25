import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TodoList from '../todoList';
import TodoItemCreator from '../todoItemCreater'
const Stack = createStackNavigator();

class CreateStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator headerMode="none" initialRouteName={'TodoListScreen'}>
        <Stack.Screen name="TodoListScreen" component={TodoList} />
        <Stack.Screen name="TodoItemCreatorScreen" component={TodoItemCreator} />
      </Stack.Navigator>
    );
  }
}

export default CreateStackNavigator;
