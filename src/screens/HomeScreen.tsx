import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { getProducts } from '../services/api';
import { Product } from '../types'
import ProductList from '../components/ProductList';
import { NavigationProp } from '@react-navigation/native';

export default function HomeScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(function()  {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (e) {
        console.error('Error fetching categories:', e);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={style.container}>
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

