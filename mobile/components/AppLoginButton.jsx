import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/AppStyle';
import CustomButton from './CustomButton';
import {Login} from '../screens/Login';

export const AppLoginButton = ({navigation}) => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.title}> Welcome to Music Hub</Text>
      <CustomButton
        style={styles.welcomeButtons}
        title="Log in"
        onPress={() => navigation.navigate('Login')}
      />
      <CustomButton style={styles.welcomeButtons} title="Register" />
    </View>
  );
};
