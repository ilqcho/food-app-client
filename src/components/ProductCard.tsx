import React, { useContext, useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Card, Title, Paragraph, IconButton  } from 'react-native-paper';
import { ProductProps } from '../types';
import { StateContext } from '../contexts/StateProvider';
import CartButton from './CartButton';

const ProductCard: React.FC<ProductProps> = React.memo(({ product, isCartScreen }) => {
  const { dispatch } = useContext(StateContext);
  const [selected, setSelected] = useState(false);

  const addToBasket = () => {
    setSelected(!selected);
    dispatch({ type: 'ADD_TO_BASKET', payload: product });
  };

  const deleteFromBasket = () => {
    dispatch({ type: 'DELETE_FROM_BASKET', payload: product });
  }

  return (
      <Card>
        <Card.Cover 
          source={{ uri: product.strMealThumb }} 
          resizeMode="contain"
        />
        <Card.Content>
          <Title  style={styles.titleContainer}>{product.strMeal}</Title>
          <View style={styles.priceContainer}>
            <Paragraph>Price: ${product.price}</Paragraph> 
            {isCartScreen ? 
                <CartButton selected={selected} onPress={deleteFromBasket} icon={'delete'} />
               : (
                <CartButton selected={selected} onPress={addToBasket} icon={'cart'} />
              )}
          </View>
        </Card.Content>
      </Card>
  );
});

const styles = StyleSheet.create({
  titleContainer: {
    height: 60
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  cartButton: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  cartButtonSelected: {
    backgroundColor: '#E0E0E0',
  },
});

export default ProductCard;