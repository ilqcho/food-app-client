import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BalanceProps } from '../types';
import { StateContext, getBasketTotal } from '../contexts/StateProvider';

const CartBalance: React.FC<BalanceProps> = ({ quantity }) => {

  const { state } = useContext(StateContext);
  const { basket } = state;
  const balance = getBasketTotal(basket);
  return (
    <View>
      <Text style={styles.balanceText}>Total items: {quantity}</Text>
      <Text style={styles.balanceText}>Balance: ${balance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default CartBalance;