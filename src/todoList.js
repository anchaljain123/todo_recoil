import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
// * Atoms
import { todoListState } from './Atoms'
import TodoItem from './todoItem';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { styles } from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage';

//Saving todos in asyncstorage
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
        storeData(todoList);
    }, [todoList.length]);

    return (
        <SafeAreaView style={styles.container} >
            <View style={{
                alignItems: 'center',
                marginVertical: 10
            }}>
                <Image style={styles.banner} source={require('../assets/banner.png')} />
            </View>
            <View style={{
                marginTop: 20
            }}>
                <Text>To Do List</Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 4
                }}>
                    <View style={styles.redBox} />
                    <Text>Urgent</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                marginBottom: 40
            }}>
                <ScrollView>
                    {todoList.map((todoItem, index) => (
                        <TodoItem key={index} item={todoItem} idx={index + 1} />
                    ))}
                </ScrollView>
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.push('TodoItemCreatorScreen')}
                activeOpacity={1}
                style={styles.addBtn}>
                <Text style={styles.addBtnText}>New Task</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default TodoList;