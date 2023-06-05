import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

export default function CategoryScreen ({ route }: { route: RouteProp<any> })  {
    const { category }: any = route.params;
  
    return (
        <View style={style.container}>
            <Text>{ category.strCategory }</Text>
        </View>
    );
    }
    
    const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});