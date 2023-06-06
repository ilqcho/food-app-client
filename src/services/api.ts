import { Product, Category, BillingDetails } from '../types';

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

export async function createPaymentIntent(billingDetails: BillingDetails): Promise<{ clientSecret: string }> {
    try {
        const response = await fetch(`${API_BASE_URL}/payment/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currency: 'usd',
                billingDetails,
            }),
        });

        const { clientSecret } = await response.json();
        return { clientSecret };
        
    } catch (e) {
        console.error('Error creating payment intent:', e);
        throw e;
    }
}