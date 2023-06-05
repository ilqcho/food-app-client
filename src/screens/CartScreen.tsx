import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StateContext } from '../contexts/StateProvider';
import ProductList from '../components/ProductList';

export default function CartScreen () {
  const { state } = useContext(StateContext);
  const { basket } = state;

    return (
        <View>
            {basket.length > 0 ? (
                <ProductList products={basket} />
            ) : (
                <View style={styles.container}>
                    <Text>No hay productos en el carrito</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 300,
  },
});