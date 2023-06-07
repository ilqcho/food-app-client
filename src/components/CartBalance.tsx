import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Paragraph, Card } from 'react-native-paper';
import { BalanceProps } from '../types';
import { StateContext, getBasketTotal } from '../contexts/StateProvider';
import FormatAmount from '../utils/FormatAmount';

const CartBalance: React.FC<BalanceProps> = ({ quantity }) => {

  const { state } = useContext(StateContext);
  const { basket } = state;
  const balance = getBasketTotal(basket);
  return (
    <Card style={{margin: 20, paddingBottom:10}} >
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Total:</Text>
        <FormatAmount amount={balance} style={styles.balanceText} />
      </View>
      {
        quantity && <Paragraph style={styles.itemsText}>Items: {quantity}</Paragraph>
      }
    </Card>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  balanceText: {
    marginRight: 5,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  itemsText: {
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default CartBalance;