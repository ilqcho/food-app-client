import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StateContext } from '../contexts/StateProvider';
import ProductList from '../components/ProductList';
import CartBalance from '../components/CartBalance';

export default function CartScreen () {
  const { state } = useContext(StateContext);
  const { basket } = state;

    return (
        <ScrollView>
            {basket.length > 0 ? (
                <View>
                    <CartBalance quantity={basket.length} />
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
});