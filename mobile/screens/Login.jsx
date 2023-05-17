import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import FormStyles from '../styles/LoginRegisterSyles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Controlla lo stato dell'email
    if (email.trim() !== '' && password.trim() !== '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, password]);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    // Pulisci l'input dopo aver premuto il tasto di login
    setEmail('');
    setPassword('');
  };

  return (
    <View style={FormStyles.loginContainer}>
      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        value={email}
        onChangeText={text => setEmail(text)}
        style={FormStyles.loginTextInput}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={FormStyles.loginTextInput}
      />
      <TouchableOpacity
        onPress={handleLogin}
        disabled={!isValid}
        style={{
          backgroundColor: isValid ? '#007AFF' : '#D3D3D3',
          padding: 10,
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
