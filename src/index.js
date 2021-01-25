import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import CreateStackNavigator from "./navigator/stackNavigator";

const Landing = () => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <CreateStackNavigator />
        </SafeAreaView>
    );
}

export default Landing;
