import React from 'react';
import { useRecoilState } from 'recoil';
// * Atoms
import { todoListState } from './Atoms';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

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

        <View style={{
            flexDirection: 'row',
            marginVertical: 20,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10
        }}>
             <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 20
            }}>
                <View style={{
                    borderColor: item.isUrgent ? 'red' : 'none',
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingVertical: 3,
                    paddingHorizontal: 18,
                    backgroundColor: 'black',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color:'white',
                        fontWeight: 'bold',
                        fontSize:16
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