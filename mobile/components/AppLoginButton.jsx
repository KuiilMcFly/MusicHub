import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/AppStyle';
import CustomButton from './CustomButton';

export const AppLoginButton = ({navigation}) => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.title}> Welcome to Music Hub</Text>
      <CustomButton
        style={styles.welcomeButtons}
        title="Log in"
        onPress={() => navigation.navigate('Login')}
      />
      <CustomButton
        style={styles.welcomeButtons}
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <CustomButton
        style={styles.welcomeButtons}
        title="Home (Temporaneo)"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
