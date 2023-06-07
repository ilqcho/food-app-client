import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Paragraph, IconButton } from 'react-native-paper';
import { NavigationScreenProps } from '../types';
import AppButton from './AppButton';

const PaymentError: React.FC<NavigationScreenProps> = ({ navigation }) => {

  const handleRetry = () =>{
    navigation.navigate('Cart');
  }

  return (
    <View style={styles.container}>
      <IconButton icon='cancel' size={200} iconColor='red' />
      <Title style={styles.title}>Payment Error</Title>
      <Paragraph style={styles.paragraph}>There was an error processing your payment.</Paragraph>
      <AppButton onPress={handleRetry} title='Retry Payment' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop: 150,
      alignItems: 'center',
  },
  title: {
    fontSize: 25,
  },
  paragraph: {
      padding: 10,
      marginVertical: 10,
  },
});

export default PaymentError;