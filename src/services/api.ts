import { Product, Category } from '../types';

const API_BASE_URL = 'http://10.0.2.2:3000';

export async function getProducts(): Promise<Product[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error fetching products:', e);
        throw e;
    }
}

export async function getCategories(): Promise<Category[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/categories`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error fetching categories:', e);
        throw e;
    }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${category}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error fetching products by category:', e);
        throw e;
    }
}