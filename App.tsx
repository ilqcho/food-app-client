import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import NavBar from './src/components/NavBar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='HomeScreen'
          screenOptions={{
            header: (props: any) => <NavBar  {...props} />
          }}
        >
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}