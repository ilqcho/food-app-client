

import { View } from 'react-native';
import PaymentSuccess from '../components/PaymentSucces';
import PaymentError from '../components/PaymentError';
import { RouteProp } from '@react-navigation/native';


interface PaymentResultParams {
    success?: string;
    error?: string;
}
  
type PaymentResultScreenProps = {
    route: RouteProp<any, 'Result'>;
};

export default function PaymentResultScreen({ route }: PaymentResultScreenProps ) {
    const { success, error } = route.params as PaymentResultParams;

    return (
        <View>
            {success && <PaymentSuccess />}
            {error && <PaymentError />}
        </View>
    );
}

