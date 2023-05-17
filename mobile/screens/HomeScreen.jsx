import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  DrawerLayoutAndroid,
} from 'react-native';
import HomeStyles from '../styles/HomeStyle';
import CustomButton from '../components/CustomButton';
import {SearchBar} from '../components/SearchBar';

export const HomeScreen = () => {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  const navigationView = (
    <View style={HomeStyles.drawerContainer}>
      <TouchableOpacity onPress={closeDrawer}>
        <Text style={HomeStyles.drawerItem}>Menu Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={closeDrawer}>
        <Text style={HomeStyles.drawerItem}>Menu Item 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={closeDrawer}>
        <Text style={HomeStyles.drawerItem}>Menu Item 3</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={() => navigationView}>
      <View style={HomeStyles.header}>
        <TouchableOpacity onPress={openDrawer} style={HomeStyles.menuIcon}>
          <Image
            source={require('../assets/hamburger.png')}
            style={HomeStyles.menuIconImage}
          />
        </TouchableOpacity>
        <Text style={HomeStyles.title}>MusicHub</Text>
        <Image
          source={require('../assets/settings.png')}
          style={HomeStyles.SearchIcon}
        />
      </View>

      <View style={HomeStyles.homeContainer}>
        <SearchBar />
        <View style={HomeStyles.sectionButton}>
          <CustomButton
            title="Brani Salvati"
            style={HomeStyles.customSections}
          />
          <CustomButton title="Playlists" style={HomeStyles.customSections} />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};
