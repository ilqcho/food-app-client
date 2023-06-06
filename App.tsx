import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen'
import NavBar from './src/components/NavBar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import { StateProvider } from './src/contexts/StateProvider';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <StateProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
              header: (props: any) => <NavBar  {...props} />
            }}
          >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='CategoryScreen' component={CategoryScreen} options={({ route }: any) => ({ title: route.params.category.strCategory })}/>
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='Checkout' component={CheckoutScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StateProvider>
  );
}