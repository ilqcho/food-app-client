import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { View, Button } from 'react-native';
import { BillingDetails } from '../types';
// const API_BASE_URL = 'http://10.0.2.2:3000';
import { createPaymentIntent } from '../services/api';

export default function CheckoutForm() {

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
        console.log('Payment confirmation error', error);
      } else if (paymentIntent) {
        console.log('Success from promise', paymentIntent);
      }
    } catch (e) {
      console.error('Error processing payment:', e);
    }
  };

  // const fetchPaymentIntentClientSecret = async () => {
  //   const response = await fetch(`${API_BASE_URL}/payment/create-payment-intent`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       currency: 'usd',
  //     }),
  //   });
  //   const {clientSecret} = await response.json();
  //   return clientSecret;
  // };

  // const { confirmPayment, loading } = useConfirmPayment();
  // const handlePayPress = async () => {
  //   const billingDetails: BillingDetails = {
  //     email: 'ig.ignaciogarcia.ig@gmail.com',
  //   };

  //   const clientSecret = await fetchPaymentIntentClientSecret();

  //   const { paymentIntent, error } = await confirmPayment(clientSecret, {
  //     paymentMethodType: 'Card',
  //     paymentMethodData: {
  //       billingDetails,
  //     },
  //   });

  //   if(error) {
  //     console.log('Payment confirmation error', error);
  //   }else if(paymentIntent){
  //     console.log('success from promise', paymentIntent);
  //   }
  // };

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