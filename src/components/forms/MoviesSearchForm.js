import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

/*  
 * Ideally I wanted to use a bottom sheet modal for the dropdown to resemble the native mobile experience
 * using Gorhom Bottom Sheet (https://gorhom.dev/react-native-bottom-sheet/), 
 * but things got out of control with all the nested components...
 * So as an easy way around, I'm using a simple dropdown picker component.
 * 
 * React Native Dropdown Picker:
 * https://hossein-zare.github.io/react-native-dropdown-picker-website/docs
 */

const MoviesSearchForm = ({ onInputChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('popular');
  const [items, setItems] = useState([
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ]);

  return (
    <View style={styles.movieDropDown}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={onInputChange}
        placeholder="Select category"
      />
    </View>
  );
};

// Styles for the MoviesSearchForm component
const styles = StyleSheet.create({
  movieDropDown: {
    backgroundColor: '#eee',
    marginHorizontal: 64,
    marginTop: 32,
    marginBottom: 32,
    zIndex: 1000, // Ensure dropdown is above other components
  },
});

export default MoviesSearchForm;
