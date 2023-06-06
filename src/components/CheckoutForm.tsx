import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { View, Button } from 'react-native';
import { BillingDetails } from '../types';
import { createPaymentIntent } from '../services/api';
import { NavigationScreenProps } from '../types';

export default function CheckoutForm({ navigation }: NavigationScreenProps) {

  const { confirmPayment, loading } = useConfirmPayment();

  const handlePayPress = async () => {
    const billingDetails: BillingDetails = {
      email: 'ig.ignaciogarcia.ig@gmail.com',
    };

    try {
      const { clientSecret } = await createPaymentIntent(billingDetails);

      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethodData: {
          billingDetails,
        },
      });

      if (error) {
        navigation.navigate('Result', { error: 'error' });
        // console.log('Payment confirmation error', error);
      } else if (paymentIntent) {
        navigation.navigate('Result', { success: 'success' }); 
        // console.log('Success from promise', paymentIntent);
      }
    } catch (e) {
      console.error('Error processing payment:', e);
    }
  };

  return (
    <View>

      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        // onCardChange={(cardDetails) => {
        //   console.log('cardDetails', cardDetails);
        // }}
      //   onFocus={(focusedField) => {
      //     console.log('focusField', focusedField);
      //   }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
}