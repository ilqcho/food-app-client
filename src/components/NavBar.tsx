import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { getCategories } from '../services/api';
import { Category } from '../types';


export default function NavBar() {
    const [categories, setCategories] = useState<Category[]>([]);
  
    useEffect(function () {
      const fetchCategories = async () => {
        try {
          const data = await getCategories();
          setCategories(data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      fetchCategories();
    }, []);
  
    return (
        <Text>navbar</Text>
    );
  };

