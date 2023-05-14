import React from 'react';
import {Text, View} from 'react-native';
import {AppLoginButton} from './components/AppLoginButton';
import styles from './styles/AppStyle';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './screens/Login';

export const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppLoginButton navigation={navigation} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
