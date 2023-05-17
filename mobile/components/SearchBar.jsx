import React from 'react';
import {View, TextInput, Image} from 'react-native';
import HomeStyles from '../styles/HomeStyle';

export const SearchBar = () => {
  return (
    <View style={HomeStyles.SearchContainer}>
      <TextInput style={HomeStyles.Searchbar} placeholder="Cerca una canzone" />
      <Image
        source={require('../assets/search.png')}
        style={HomeStyles.SearchIcon}
      />
    </View>
  );
};
