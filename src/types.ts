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

export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}
