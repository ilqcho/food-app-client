import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const LoaderComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={'blue'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoaderComponent;