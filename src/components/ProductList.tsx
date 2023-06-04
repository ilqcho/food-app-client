import { View, StyleSheet, ScrollView } from 'react-native';
import { ProductListProps } from '../types';
import ProductCard from './ProductCard'

const ProductList: React.FC<ProductListProps> = ({ products }) => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product, index) => (
        <View key={index} style={styles.column}>
          <ProductCard product={product} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default ProductList;