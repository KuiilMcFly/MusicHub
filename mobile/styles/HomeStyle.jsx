import {StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 25,
    marginTop: 10,
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
});

export default HomeStyles;
