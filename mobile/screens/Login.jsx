import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

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

    //Pulisci l'input dopo aver premuto il tasto di login
    setEmail('');
    setPassword('');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{borderWidth: 1, width: 200, padding: 10, marginBottom: 10}}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={{borderWidth: 1, width: 200, padding: 10, marginBottom: 10}}
      />
      <TouchableOpacity
        onPress={handleLogin}
        disabled={!isValid}
        style={{backgroundColor: isValid ? '#007AFF' : '#D3D3D3', padding: 10}}>
        <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
