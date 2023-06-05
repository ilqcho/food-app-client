import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StateContext } from '../contexts/StateProvider';
import ProductList from '../components/ProductList';
import { getBasketTotal } from '../contexts/StateProvider';
import CartBalance from '../components/CartBalance';

export default function CartScreen () {
  const { state } = useContext(StateContext);
  const { basket } = state;
  const balance = getBasketTotal(basket);

    return (
        <View>
            {basket.length > 0 ? (
                <View>
                    <CartBalance balance={balance} quantity={basket.length} />
                    <ProductList products={basket} isCartScreen={true} />
                </View>
            ) : (
                <View style={styles.textContainer}>
                    <Text>There are no products</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center',
        paddingTop: 250,
    },
});