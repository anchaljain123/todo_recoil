import { StyleSheet, Dimensions } from 'react-native';
import Constants from "expo-constants";

export const styles = StyleSheet.create({
    todoContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },
    boxWrapper: {
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 18,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        padding: Constants.statusBarHeight,
    },
    banner: {
        width: '80%',
        height: 80,
        borderRadius: 10,
    },
    redBox: {
        backgroundColor: 'red',
        height: 20,
        width: 20,
        marginRight: 4,

    },
    addBtn: {
        padding: 20,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
    addBtnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    heading: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    submitBtn: {
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 20,
        alignItems: 'center',
        paddingVertical: 10
    }
})