import React, { useContext } from 'react';
import { Divider } from 'react-native-paper';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StateContext } from '../contexts/StateProvider';
import ProductList from '../components/ProductList';
import CartBalance from '../components/CartBalance';
import { NavigationScreenProps } from '../types';
import AppButton from '../components/AppButton';

export default function CartScreen ({ navigation }: NavigationScreenProps) {
    const { state } = useContext(StateContext);
    const { basket } = state;
    

    return (
        <ScrollView>
            {basket.length > 0 ? (
                <View>
                    <CartBalance quantity={basket.length} />
                    <AppButton onPress={() => navigation.navigate('Checkout')} title='Checkout'/>
                    <Divider />
                    <Text style={styles.title}>Products</Text>
                    <ProductList products={basket} isCartScreen={true} />
                </View>
            ) : (
                <View style={styles.textContainer}>
                    <Text style={styles.message}>Your cart is empty!</Text>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center',
        paddingTop: 250,
    },
    title: {
        marginRight: 5,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
    },
    message: {
        alignSelf: 'center',
        fontSize: 30,
    }
});