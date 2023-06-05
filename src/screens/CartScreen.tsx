import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StateContext } from '../contexts/StateProvider';
import ProductList from '../components/ProductList';

export default function CartScreen () {
  const { state } = useContext(StateContext);
  const { basket } = state;

    return (
        <View style={styles.container}>
            {basket.length > 0 ? (
                <ProductList products={basket} isCartScreen={true} />
            ) : (
                <View style={styles.textContainer}>
                    <Text>There are no products</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    textContainer: {
        alignItems: 'center',
        paddingTop: 300,
    },
});