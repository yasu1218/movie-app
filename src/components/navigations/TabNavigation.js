import React from 'react';
import { StyleSheet } from 'react-native';
import { Tab, Text, TabView } from '@rneui/themed';
import MoviesScreen from '../screens/MoviesScreen';
import SearchScreen from '../screens/SearchScreen';
import TVShowsScreen from '../screens/TVShowsScreen';

// Tab navigation component that uses Tab and TabView from RNE to create a tabbed interface
// It contains three tabs: Movies, Search Results and TV Shows. 
const TabNavigation = ({navigation}) => {

  const [index, setIndex] = React.useState(0);  // State to manage the currently selected tab index. Default = 0 (Movies tab)

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={styles.indicator}
        containerStyle={styles.tabContainer}
        variant="primary"
      >
        <Tab.Item
          title="Movies"
          titleStyle={styles.tabTitle}
        />
        <Tab.Item
          title="Search Results"
          titleStyle={styles.tabTitle}
        />
        <Tab.Item
          title="TV Shows"
          titleStyle={styles.tabTitle}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="timing" >

        <TabView.Item style={styles.tabViewItem}>
          <MoviesScreen navigation={navigation} />
        </TabView.Item>

        <TabView.Item style={styles.tabViewItem}>
          <SearchScreen navigation={navigation} />
        </TabView.Item>

        <TabView.Item style={styles.tabViewItem}>
          <TVShowsScreen navigation={navigation} />
        </TabView.Item>
      </TabView>
    </>
  );
};

export default TabNavigation;

// styles
const styles = StyleSheet.create({
  // Styles for the tab component (indicator)
  indicator: {
    backgroundColor: '#2c3e50',
    height: 3,
  },
  // Styles foor the tab container
  tabContainer: {
    backgroundColor: '#eee',
  },
  // Styles for the tab title
  tabTitle: {
    fontSize: 13,
    color: 'black',
    paddingHorizontal: 0,
  },
  // Styles for the tab view item
  tabViewItem: {
    backgroundColor: '#eee',
    width: '100%',
  },
});
