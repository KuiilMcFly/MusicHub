import React from 'react';
import HomeStyles from '../styles/HomeStyle';
import {View} from 'react-native';
import CustomButton from './CustomButton';

export const MyMusic = () => {
  return (
    <View style={HomeStyles.sectionButton}>
      <CustomButton title="Brani Salvati" style={HomeStyles.customSections} />
      <CustomButton title="Playlists" style={HomeStyles.customSections} />
    </View>
  );
};
