import { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { getProducts } from '../services/api';
import { Product } from '../types'
import ProductCard from '../components/ProductCard';
import LoaderComponent from '../components/LoaderComponent';

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(4);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const newProducts = await getProducts(page, pageSize);
      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts(prevProducts => [...prevProducts, ...newProducts]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (e) {
      console.error('Error fetching products:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleEndReached = () => {
    if (!loading && hasMore) {
      fetchData();
    }
  };

  return (
      <FlatList
        style={styles.container}
        data={products}
        renderItem={({ item }) => <ProductCard product={item} toggleStyles={true} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <LoaderComponent /> : null}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.column}
      />
  );
}

const styles = StyleSheet.create({
  column: {
    flexShrink: 1,
  },
  list: {
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
