import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import FormStyles from '../styles/LoginRegisterSyles';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Perform registration logic
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear input fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View style={FormStyles.loginContainer}>
      <TextInput
        placeholder="Name"
        placeholderTextColor="gray"
        value={name}
        onChangeText={text => setName(text)}
        style={FormStyles.loginTextInput}
      />
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
        onPress={handleRegistration}
        style={{backgroundColor: '#007AFF', padding: 10}}>
        <Text style={{color: 'white', textAlign: 'center'}}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
