import React from 'react';
import { View, Text } from 'react-native';
import { RecoilRoot } from 'recoil';
import 'react-native-gesture-handler';
import CreateStackNavigator from "./src/navigator/stackNavigator";

import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Landing from './src';

const App = () => {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<View><Text>...Loading</Text></View>}>
        <NavigationContainer>
          <CreateStackNavigator />
        </NavigationContainer>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
