import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Constants from "expo-constants";
import { getId } from './utils';
// * Atoms
import { todoListState } from './Atoms';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';


function TodoItemCreator(props) {
    const [inputValue, setInputValue] = useState('');
    const [bodyValue, setBodyValue] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const setTodoList = useSetRecoilState(todoListState);
    const addItem = () => {
        setTodoList((oldTodoList) => {
            return [
                ...oldTodoList,
                {
                    id: getId(),
                    text: inputValue,
                    body: bodyValue,
                    isUrgent: toggleCheckBox,
                }
            ]
        });
        props.navigation.pop()
    };

    const onChange = (value) => {
        setInputValue(value);
    };
    const onChangeBody = (value) => {
        setBodyValue(value);
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            padding: Constants.statusBarHeight,
        }}>
            <View style={{
                alignItems: 'center',
                marginVertical: 20
            }}>
                <Image style={{
                    width: '80%',
                    height: 80,
                    borderRadius: 10,
                }} source={require('../assets/banner.png')} />
            </View>
            <Text>Add a Task</Text>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 20 }}>
                    <Text>Title</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={e => onChange(e)} />
                </View>
                <View style={{
                    marginVertical: 20,
                }}>
                    <Text>Body</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={3}
                        textAlignVertical="top"
                        style={{
                            borderColor: 'gray',
                            borderWidth: 1
                        }}
                        onChangeText={e => onChangeBody(e)} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>Urgent</Text>
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end'
                }}>
                    <TouchableOpacity onPress={addItem} style={styles.submitBtn}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.pop()}
                        style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            alignItems: 'center',
                            paddingVertical: 10
                        }}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>

        </SafeAreaView>
    );
}

export default TodoItemCreator;