import { NavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface Product {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    price: number;
    idCategory: string;
    strCategory: string;
    quantity: number;
};

export interface ProductProps {
    product: Product;
    isCartScreen?: boolean | null,
    toggleStyles?: boolean | null,
}

export interface ProductListProps {
    products: Product[];
    isCartScreen?: boolean | null,
}

export interface State {
    basket: Product[];
    total: number;
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

export interface BalanceProps {
    quantity?: number;
}

export interface BillingDetails {
    email: string;
}

export interface NavigationScreenProps {
    navigation: StackNavigationProp<any>;
}

export interface PaymentResultParams {
    success?: string;
    error?: string;
}
  
export interface PaymentResultScreenProps {
    navigation: NavigationScreenProps['navigation'];
    route: RouteProp<any, 'Result'>;
};

export interface CartButtonProps {   
    icon: string; 
    size?: number; 
    color?: string; 
    onPress: () => void 
}

export interface AppButtonProps {
    title: string;
    onPress: () => void ;
}
