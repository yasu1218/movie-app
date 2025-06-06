import React, { useEffect, useState } from 'react';
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

const MediaCategorySelectionForm = ({ onInputChange, categories, defaultCategory }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Initialize categories and default value
    setValue(defaultCategory);
    setItems(categories);
  }, [categories, defaultCategory]);

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
        style={[styles.dropdownStyle, 
          open && styles.focusBorder, // Change border color on focus
        ]}
        dropDownContainerStyle={styles.dropDownContainerStyle}        
      />
    </View>
  );
};

export default MediaCategorySelectionForm;

// Styles for the MediaCategorySelectionForm component
const styles = StyleSheet.create({
  // Styles for border colors on focus
  focusBorder: {
    borderColor: '#00bfff',
  },
  // Styles for the dropdown picker
  movieDropDown: {
    backgroundColor: '#eee',
    marginHorizontal: 64,
    marginTop: 32,
    marginBottom: 32,
    width: '60%',
    alignSelf: 'center',
    zIndex: 1000, // Ensure dropdown is above other components
  },
  dropdownStyle: {
    backgroundColor: '#eee',
    borderColor: '#ccc',
    minHeight: 35,
  },
  dropDownContainerStyle: {
    backgroundColor: '#eee',
    borderColor: '#ccc',
    top: 34,
  },
});

