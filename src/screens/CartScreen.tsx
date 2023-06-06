import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StateContext } from '../contexts/StateProvider';
import ProductList from '../components/ProductList';
import CartBalance from '../components/CartBalance';
import { StackNavigationProp } from '@react-navigation/stack';

interface CartScreenProps {
    navigation: StackNavigationProp<any>;
  }

export default function CartScreen ({ navigation }: CartScreenProps) {
    const { state } = useContext(StateContext);
    const { basket } = state;
    

    return (
        <ScrollView>
            {basket.length > 0 ? (
                <View>
                    <CartBalance quantity={basket.length} />
                    <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout')}>
                        <Text style={styles.checkoutButtonText}>Checkout</Text>
                    </TouchableOpacity>
                    <ProductList products={basket} isCartScreen={true} />
                </View>
            ) : (
                <View style={styles.textContainer}>
                    <Text>There are no products</Text>
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
    checkoutButton: {
        backgroundColor: 'blue',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});