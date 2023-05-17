import React from 'react';
import {Text, View} from 'react-native';
import {AppLoginButton} from './components/AppLoginButton';
import styles from './styles/AppStyle';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './screens/Login';
import RegistrationScreen from './screens/Register';
import {HomeScreen} from './screens/HomeScreen';

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
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
