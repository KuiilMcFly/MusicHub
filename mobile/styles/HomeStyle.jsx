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
});

export default HomeStyles;
