import { useEffect, useState, useContext } from 'react';
import { getCategories } from '../services/api';
import { Category } from '../types';
import { Appbar, Menu, Badge } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { NavBarProps } from '../types';
import { View, StyleSheet } from 'react-native';
import { StateContext } from '../contexts/StateProvider';

export default function NavBar({ navigation, route, options, back }: NavBarProps) {
  const { state } = useContext(StateContext);
  const { basket } = state;
  const cartItemsCount = basket.length;
  const badgeContent: string | null = cartItemsCount > 0 ? cartItemsCount.toString() : null;
  
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
    <Appbar.Header style={styles.appHeader}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
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
      <View style={styles.titleContainer}>
        <Appbar.Content title={title} />
      </View>
      <View>
        <Appbar.Action
          icon="cart"
          size={35}
          onPress={() => navigation.navigate('Cart')}
        />
         <Badge visible={cartItemsCount > 0} size={25} style={styles.badge}>
            {badgeContent ? badgeContent : 0}
          </Badge>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appHeader: {
    marginTop: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 18,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 0,
  },
});

