import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { ProductProps } from '../types';
import { Appbar } from 'react-native-paper';

const ProductCard: React.FC<ProductProps> = React.memo(({ product }) => {
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
            <Appbar.Action icon="cart" size={20} />
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
});

export default ProductCard;