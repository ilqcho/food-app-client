

import { View } from 'react-native';
import PaymentSuccess from '../components/PaymentSucces';
import PaymentError from '../components/PaymentError';
import { PaymentResultScreenProps, PaymentResultParams } from '../types';

export default function PaymentResultScreen({ navigation, route }: PaymentResultScreenProps) {
    const { success, error } = route.params as PaymentResultParams;

    return (
        <View>
            {success && <PaymentSuccess navigation={navigation}/>}
            {error && <PaymentError navigation={navigation} />}
        </View>
    );
}

