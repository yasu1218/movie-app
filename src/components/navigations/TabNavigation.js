import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';

import MoviesScreen from '../screens/MoviesScreen';
import SearchScreen from '../screens/SearchScreen';
import TVShowsScreen from '../screens/TVShowsScreen';

// Tab navigation component that uses Tab and TabView from RNE to create a tabbed interface
// It contains three tabs: Movies, Search Reulsts and TV Shows. 
const TabNavigation = ({navigation}) => {

  const [index, setIndex] = React.useState(0);  // State to manage the currently selected tab index. Default = 0 (Movies tab)

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: '#2c3e50',
          height: 3,
        }}
        containerStyle={{ backgroundColor: '#eee' }}
        variant="primary"
      >
        <Tab.Item
          title="Movies"
          titleStyle={{ fontSize: 11, color: 'black' }}
        />
        <Tab.Item
          title="Search Results"
          titleStyle={{ fontSize: 11, color: 'black', margin: 0, padding: 0 }}
        />
        <Tab.Item
          title="TV Shows"
          titleStyle={{ fontSize: 11, color: 'black' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="timing" >

        <TabView.Item style={{ backgroundColor: '#eee', width: '100%' }}>
          <MoviesScreen navigation={navigation} />
        </TabView.Item>

        <TabView.Item style={{ backgroundColor: '#eee', width: '100%' }}>
          <SearchScreen navigation={navigation} />
        </TabView.Item>

        <TabView.Item style={{ backgroundColor: '#eee', width: '100%' }}>
          <TVShowsScreen navigation={navigation} />
        </TabView.Item>
      </TabView>
    </>
  );
};

export default TabNavigation;
