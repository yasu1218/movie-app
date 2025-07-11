import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Importing screens that will be used in the stack navigator
import TabNavigation from '../navigations/TabNavigation';
import MediaDetailsScreen from '../screens/MediaDetailsScreen';

// Creating a stack navigator using createNativeStackNavigator
const Stack = createNativeStackNavigator();

// AppStack component that defines the navigation structure of the app. We have three screens: Index, Show, and Web.
// MoviesScreen displays a list of movies.

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Tabs" 
          component={TabNavigation} 
          options={{
            title: 'Movies App',
            headerStyle: {
              backgroundColor: '#2c3e50',
            },
            headerTitleStyle: {
              color: '#fff',
            },
          }}
        />
        {/* For navigating to the movie details */}
        <Stack.Screen
          name='MediaDetails'
          component={MediaDetailsScreen}
          options={({ media_id }) => ({
            headerBackTitle: 'Back',
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack;
