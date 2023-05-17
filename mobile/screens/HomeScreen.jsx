import React from 'react';
import {View, Text, TextInput, Image, Button} from 'react-native';
import HomeStyles from '../styles/HomeStyle';
import CustomButton from '../components/CustomButton';

export const HomeScreen = () => {
  return (
    <View style={HomeStyles.homeContainer}>
      <Text style={HomeStyles.title}>MusicHub</Text>
      <View style={HomeStyles.SearchContainer}>
        <TextInput
          style={HomeStyles.Searchbar}
          placeholder="Cerca una canzone"
        />
        <Image
          source={require('../assets/search.png')}
          style={HomeStyles.SearchIcon}
        />
      </View>
      <View style={HomeStyles.sectionButton}>
        <CustomButton title="Brani Salvati" style={HomeStyles.customSections} />
        <CustomButton title="Playlists" style={HomeStyles.customSections} />
      </View>
    </View>
  );
};
