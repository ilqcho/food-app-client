import React, { useContext, useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Card, Title, Paragraph, IconButton  } from 'react-native-paper';
import { ProductProps } from '../types';
import { StateContext } from '../contexts/StateProvider';

const ProductCard: React.FC<ProductProps> = React.memo(({ product }) => {
  const { dispatch } = useContext(StateContext);
  const [selected, setSelected] = useState(false);

  const addToBasket = () => {
    setSelected(!selected);
    dispatch({ type: 'ADD_TO_BASKET', payload: product });
  };

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
            <TouchableHighlight
              style={[
                styles.cartButton,
                selected ? styles.cartButtonSelected : null,
              ]}
              onPress={addToBasket}
              underlayColor="#E0E0E0"
            >
              <IconButton icon="cart" size={20} />
            </TouchableHighlight>
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