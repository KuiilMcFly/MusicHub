import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  DrawerLayoutAndroid,
  Modal,
  Alert,
} from 'react-native';
import HomeStyles from '../styles/HomeStyle';
import {SearchBar} from '../components/SearchBar';
import {MyMusic} from '../components/MyMusic';

export const HomeScreen = ({navigation}) => {
  const drawerRef = useRef(null);
  const [logoutConfirmationVisible, setLogoutConfirmationVisible] =
    useState(false);

  const handleLogout = () => {
    setLogoutConfirmationVisible(true);
  };

  const confirmLogout = () => {
    // Effettua qui la logica per il logout
    // ...

    setLogoutConfirmationVisible(false);
    navigation.navigate('WelcomeScreen');
  };

  const cancelLogout = () => {
    setLogoutConfirmationVisible(false);
  };

  return (
    <View>
      <View style={HomeStyles.header}>
        <TouchableOpacity onPress={handleLogout} style={HomeStyles.menuIcon}>
          <Image
            source={require('../assets/exit.png')}
            style={HomeStyles.menuIconImage}
          />
        </TouchableOpacity>
        <Text style={HomeStyles.title}>MusicHub</Text>
        <Image
          source={require('../assets/settings.png')}
          style={HomeStyles.settingIcon}
        />
      </View>

      <View style={HomeStyles.homeContainer}>
        <MyMusic />
      </View>

      <Modal
        visible={logoutConfirmationVisible}
        animationType="slide"
        transparent={true}>
        <View style={HomeStyles.modalContainer}>
          <View style={HomeStyles.modalContent}>
            <Text style={HomeStyles.logoutConfirmationText}>
              Sei sicuro di voler uscire?
            </Text>
            <View style={HomeStyles.flexButtons}>
              <TouchableOpacity
                onPress={confirmLogout}
                style={HomeStyles.logoutButton}>
                <Text style={HomeStyles.logoutButtonText}>Conferma</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={cancelLogout}
                style={HomeStyles.logoutButton}>
                <Text style={HomeStyles.logoutButtonText}>Annulla</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
