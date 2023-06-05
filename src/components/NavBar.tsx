import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import { Category } from '../types';
import { Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { NavBarProps } from '../types';

export default function NavBar({ navigation, route, options, back }: NavBarProps) {
  
  const title = getHeaderTitle(options, route.name);
  const [categories, setCategories] = useState<Category[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const openMenu = (): void => setVisible(true);
  const closeMenu = (): void => setVisible(false);  
  
    useEffect(function () {
      const fetchCategories = async () => {
        try {
          const categories = await getCategories();
          setCategories(categories);
        } catch (e) {
          console.error('Error fetching categories:', e);
        }
      };
  
      fetchCategories();
    }, []);
  
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={ title } />
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              onPress={openMenu}
            />
          }>
            {categories.map((category) => (
            <Menu.Item
              key={category.idCategory}
              onPress={() => {
                navigation.navigate('CategoryScreen', { category })
                setVisible(false)
              }}
              title={category.strCategory}
            />
          ))}
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};

