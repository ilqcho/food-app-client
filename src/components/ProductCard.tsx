import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph  } from 'react-native-paper';
import { ProductProps } from '../types';
import { StateContext } from '../contexts/StateProvider';
import CartButton from './CartButton';

const ProductCard: React.FC<ProductProps> = React.memo(({ product, isCartScreen, toggleStyles }) => {
  const { dispatch } = useContext(StateContext);

  const addToBasket = () => {
    dispatch({ type: 'ADD_TO_BASKET', payload: product });
  };

  const deleteFromBasket = () => {
    dispatch({ type: 'DELETE_FROM_BASKET', payload: product });
  }

  const increaseQuantity = () => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: product });
  };

  const decreaseQuantity = () => {
    if (product.quantity > 1) {
      dispatch({ type: 'DECREASE_QUANTITY', payload: product });
    }
  };

  return (
      <Card style={toggleStyles ? styles.cardContainer : styles.cardContainerDefault}>
        <Card.Cover 
          source={{ uri: product.strMealThumb }} 
          resizeMode="contain"
        />
        <Card.Content>
          <Title style={styles.titleContainer}>{product.strMeal}</Title>
          <View style={!isCartScreen && styles.priceContainer}>
            <Paragraph style={{ marginTop: 10, }}>Price: ${product.price}</Paragraph> 
              {isCartScreen ? (
                  <View style={styles.quantityContainer}>
                    <View style={styles.quantityContainer}>
                      <CartButton onPress={decreaseQuantity} icon={'minus'} size={15} />
                      <Paragraph>{product.quantity}</Paragraph>
                      <CartButton onPress={increaseQuantity} icon={'plus'} size={15} />
                    </View>
                    <CartButton onPress={deleteFromBasket} icon={'delete'} />
                  </View>
                ) : (
                  <CartButton onPress={addToBasket} icon={'cart-plus'} />
                )}
          </View>
        </Card.Content>
      </Card>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    width: 185,
    margin: 10,
  },
  cardContainerDefault: {
    marginTop: 10,
  },
  titleContainer: {
    height: 60
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
});

export default ProductCard;