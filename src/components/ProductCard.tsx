import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { ProductProps } from '../types';

const ProductCard: React.FC<ProductProps> = React.memo(({ product }) => {
  return (
      <Card>
        <Card.Cover 
          source={{ uri: product.strMealThumb }} 
          resizeMode="contain"
        />
        <Card.Content>
          <Title  style={styles.titleContainer}>{product.strMeal}</Title>
          <Paragraph>Price: ${product.price}</Paragraph> 
        </Card.Content>
      </Card>
  );
});

const styles = StyleSheet.create({
  titleContainer: {
    height: 100
  },
});

export default ProductCard;