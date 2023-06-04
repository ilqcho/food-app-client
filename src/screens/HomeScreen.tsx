import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getProducts } from '../services/api';
import { Product } from '../types'
import ProductList from '../components/ProductList';

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(function()  {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (e) {
        console.log(e)
      }
    };

    fetchData();
  }, []);

  return (
    <View style={style.container}>
      <Text>Home Screennn</Text>
      <ProductList products={products} />
    </View>
  );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

