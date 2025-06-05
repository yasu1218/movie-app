import { Text } from '@rneui/themed';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#333" />
      <Text style={styles.loadingText}>Loading results</Text>
    </View>
  );
};

export default Loading;

// Styles for the Loading component
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  loadingText: {
    marginTop: 0,
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
});
