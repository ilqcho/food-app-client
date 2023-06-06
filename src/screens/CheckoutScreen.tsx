import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import CheckoutForm from "../components/CheckoutForm";
import { NavigationScreenProps } from '../types';

export default function CheckoutScreen ({ navigation }: NavigationScreenProps) {
  
    return (
        <StripeProvider publishableKey='pk_test_51NFmMkCB1q6cGgp5dLNlmesqH22TCE2YJkI5Xa3PAKpwVYOqk8kITtNqgP2q8x9QiNGRtwCds953eDOwNSnO3QNh00h8kEsHBA'>
            <CheckoutForm navigation={navigation} />
        </StripeProvider>
    );
};