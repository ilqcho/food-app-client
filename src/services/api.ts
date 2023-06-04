import { Product, Category } from '../types';

export async function getProducts(): Promise<Product[]> {
    try {
        const response = await fetch('http://10.0.2.2:3000/products');
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error fetching products:', e);
        throw e;
    }
}

export async function getCategories(): Promise<Category[]> {
    try {
        const response = await fetch('http://10.0.2.2:3000/products/categories');
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error fetching products:', e);
        throw e;
    }
}