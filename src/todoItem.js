import React from 'react';
import { useRecoilState } from 'recoil';
// * Atoms
import { todoListState } from './Atoms';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function TodoItem({ item, idx }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    };

    return (
        <View style={styles.todoContainer}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 20
            }}>
                <View style={[styles.boxWrapper, { borderColor: item.isUrgent ? 'red' : 'none' }]}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 16
                    }}>Task {idx}</Text>
                </View>
                <View style={{
                    marginLeft: 30,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        textDecorationLine: 'underline'
                    }}>{item.text}</Text>
                    <Text>{item.body}</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'flex-end',
                marginRight: 30
            }}>
                <TouchableOpacity onPress={deleteItem} style={{
                    marginLeft: 5,
                    marginTop: 5,
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TodoItem;