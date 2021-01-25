import { atom, selector } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('todos');
        if (jsonValue != null) {
            return JSON.parse(jsonValue)
        }
        return [];
    } catch (e) {
        // error reading value
    }
}

const asyncTodoListState = selector({
    key: "asyncTodoListState",
    async get() {
        return await getData() || [];
    }
});

export const todoListState = atom({
    key: 'todoListState',
    default: asyncTodoListState,
});
