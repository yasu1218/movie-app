import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from '@rneui/themed';
import DropDownPicker from 'react-native-dropdown-picker';

const MediaSearchForm = ({ onSearch }) => {

  // States
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term input
  const [open, setOpen] = useState(false);  // State to control the dropdown visibility
  const [searchType, setSearchType] = useState('multi');  // State to hold the selected search type, default is 'multi'
  // Items for the dropdown picker
  const [items, setItems] = useState([  
    { label: 'movie', value: 'movie' },
    { label: 'multi', value: 'multi' },
    { label: 'tv', value: 'tv' },
  ]);

  const [isFocused, setIsFocused] = useState(false); // State to manage focus on the text input field

  return (
    <View style={styles.container}>

      {/* Row #1: Search input label */}
      <Text style={styles.label}>
        Search Movie/TV Show Name<Text style={styles.required}>*</Text>
      </Text>

      {/* Row #2: Search input field */}
      <View style={[
        styles.inputWrapper,
        isFocused && { borderColor: '#00bfff' } // Change border color on focus
      ]}>
        <Icon name="search" type="ionicon" color="#bbb" style={styles.icon} />
        <TextInput
          placeholder="e.g., James Bond, CSI"
          placeholderTextColor="#bbb"
          value={searchTerm}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={setSearchTerm}
          style={styles.input}
        />
      </View>

      {/* Row #3: Search type dropdown label */}
      <Text style={styles.label}>
        Choose Search Type<Text style={styles.required}>*</Text>
      </Text>

      {/* Row #4: Search type dropdown and search button */}
      <View style={styles.row}>

        {/* Row #4 Column 1: Dropdown */}
        <View style={styles.dropdownWrapper}>
          <DropDownPicker
            open={open}
            value={searchType}
            items={items}
            setOpen={setOpen}
            setValue={setSearchType}
            setItems={setItems}
            placeholder="Select search type"
            style={styles.dropdown}
            dropDownContainerStyle={{
              backgroundColor: '#eee',
              borderColor: '#ccc',
              position: 'absolute', 
              top: 40,
              zIndex: 1000,
            }}
          />
        </View>

        {/* Row #4 Column 2: Search button */}
        <TouchableHighlight
          underlayColor="#06c"
          activeOpacity={0.85}
          style={styles.touchableButton}
          onPress={() => onSearch(searchTerm, searchType)}
        >
          <View style={styles.buttonContent}>
            <Icon name="search" type="ionicon" color="#fff" size={20} />
            <Text style={styles.buttonText}>Search</Text>
          </View>
        </TouchableHighlight>
      </View>

      {/* Row 5: Placeholder text for the dropdown */}
      <Text style={{ color: '#444', fontSize: 12, marginTop: 8 }}>
        Please select a search type
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    marginBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 1000 
  }, // zIndex helps with dropdown overlay
  label: { 
    fontWeight: 'bold', 
    color: '#222', 
    marginBottom: 6 
  },
  required: { 
    color: 'red' 
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 8,
    marginBottom: 12,
  },
  icon: { 
    marginRight: 8 
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    zIndex: 1000, // for dropdown overlap
  },
  dropdownWrapper: {
    flex: 6,
    marginRight: 8,
    zIndex: 1000,
  },
  dropdown: {
    borderRadius: 6,
    backgroundColor  : '#eee', 
    borderColor: '#ccc'
  },

  touchableButton: {
    flex: 4, 
    backgroundColor: '#00bfff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    paddingTop: 12,
    paddingBottom: 12,

  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default MediaSearchForm;
