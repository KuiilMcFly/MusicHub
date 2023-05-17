import {StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 25,
  },

  homeContainer: {
    alignItems: 'center',
  },

  Searchbar: {
    borderWidth: 1,
    width: '70%',
    marginTop: 10,
  },

  SearchContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },

  SearchIcon: {
    width: 40,
    height: 40,
  },

  sectionButton: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 30,
  },

  customSections: {
    width: 175,
    height: 175,
  },
  menuIconImage: {
    width: 30,
    height: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  settingIcon: {
    width: 30,
    height: 30,
  },
  modalContainer: {
    backgroundColor: '#AFAEAE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '20%',
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    bottom: '40%',
    borderRadius: 15,
  },

  logoutConfirmationText: {
    color: 'black',
    fontSize: 20,
  },
  flexButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  logoutButtonText: {
    color: 'black',
    textAlign: 'center',
  },

  logoutButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.50)',
    borderRadius: 15,
    width: 100,
  },
});

export default HomeStyles;
