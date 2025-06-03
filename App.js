import { createTheme, ThemeProvider } from '@rneui/themed'; // Import React Native Elements themed provider
import { StatusBar } from 'expo-status-bar'; // Import StatusBar from Expo
import { SafeAreaProvider } from 'react-native-safe-area-context';  // Import SafeAreaProvider for safe area handling

import Header from './src/components/layout/Header';

// Import the main stack navigator for the app
import AppStack from './src/components/stacks/AppStack';

// Create a theme with light and dark colors.
const theme = createTheme({
  lightColors: {
    primary: 'blue'
  },
  darkColors: {
    primary: 'blue'
  },
  components: {
    Button: {
      raised: true
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <AppStack />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
