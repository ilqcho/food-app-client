import { View, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useState, useEffect, useCallback  } from 'react';
import { Product } from '../types';
import { getProductsByCategory } from '../services/api';
import ProductList from '../components/ProductList';
import LoaderComponent from '../components/LoaderComponent';

export default function CategoryScreen ({ route }: { route: RouteProp<any> })  {
  const { category }: any = route.params;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProductsByCategory = useCallback(async () => {
    try {
      setLoading(true);
      const products = await getProductsByCategory(category.strCategory);
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products by category:', error);
    } 
  }, [category]);
  
  useEffect(() => {
      fetchProductsByCategory();
  }, [fetchProductsByCategory]);

  return (
      <View style={style.container}>
        {
          loading ? <LoaderComponent /> 
        : 
          <ProductList products={products} />
        }
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