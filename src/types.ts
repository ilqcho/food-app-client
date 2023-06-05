import { NavigationProp, RouteProp } from '@react-navigation/native';

export interface Product {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    price: number;
    idCategory: string;
    strCategory: string;
};

export interface ProductProps {
    product: Product;
}

export interface ProductListProps {
    products: Product[];
}

export interface State {
    basket: Product[];
}
  
export interface Action {
    type: string;
    payload?: any;
}

export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export interface NavBarProps {
    navigation: NavigationProp<any>
    route: RouteProp<any>;
    options: any;
    back: any;
};


