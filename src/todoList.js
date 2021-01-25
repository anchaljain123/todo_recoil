import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
// * Atoms
import { todoListState } from './Atoms'
import TodoItem from './todoItem';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from "expo-constants";

import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('todos', jsonValue);
    } catch (e) {
        // saving error
        console.log("store data error", e)
    }
}

const TodoList = props => {
    const todoList = useRecoilValue(todoListState);
    useEffect(() => {
        console.log(">>todoList", todoList.length)
        storeData(todoList);
    }, [todoList.length]);

    return (
        <SafeAreaView style={styles.container} >
            <View style={{
                alignItems: 'center',
                marginVertical: 10
            }}>
                <Image style={{
                    width: '80%',
                    height: 80,
                    borderRadius: 10,
                }} source={require('../assets/banner.png')} />
            </View>
            <View style={{
                marginTop: 20
            }}>
                <Text>To Do List</Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 4
                }}>
                    <View style={{
                        backgroundColor: 'red',
                        height: 20,
                        width: 20,
                        marginRight: 4,
                        
                    }} />
                    <Text>Urgent</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                marginBottom: 40
            }}>
                <ScrollView style={{}}>
                    {todoList.map((todoItem, index) => (
                        <TodoItem key={index} item={todoItem} idx={index + 1} />
                    ))}
                </ScrollView>
            </View>
            <View style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginBottom: 30,
                padding: 12,
                backgroundColor: 'lightgrey',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 5,
            }}>
                <TouchableOpacity onPress={() => props.navigation.push('TodoItemCreatorScreen')}
                    style={{}}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize:16
                    }}>New Task</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Constants.statusBarHeight,
    },
});

export default TodoList;