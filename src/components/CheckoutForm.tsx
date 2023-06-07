import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { View, StyleSheet, ScrollView } from 'react-native';
import { BillingDetails } from '../types';
import { Paragraph } from 'react-native-paper';
import { createPaymentIntent } from '../services/api';
import { NavigationScreenProps } from '../types';
import AppButton from './AppButton';

export default function CheckoutForm({ navigation }: NavigationScreenProps) {

  const { confirmPayment } = useConfirmPayment();

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
        console.log(error)
        navigation.navigate('Result', { error: 'error' });
      } else if (paymentIntent) {
        navigation.navigate('Result', { success: 'success' }); 
      }
    } catch (e) {
      console.error('Error processing payment:', e);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
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
            width: '90%',
            height: 80,
          }}
        />
        <Paragraph style={{textAlign:'left'}}>Insert your card details</Paragraph>
      </View>
      <AppButton onPress={handlePayPress} title='Pay' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 30,
  },
});