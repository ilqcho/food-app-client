import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';


export default function App() {
  const handlePress = () => {
    console.log('¡Prueba de console.log!');
  };
  
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>BUENAS!!!BUENAS!!!BUENAS!!!BUENAS!!!!!!</Text>
        <Button mode="contained" onPress={handlePress}>
          Presionar
        </Button>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
