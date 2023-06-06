import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Paragraph, Button, IconButton } from 'react-native-paper';

const handleRetry = () =>{
    console.log('navigate to cart')
}

const PaymentError: React.FC = () => {
  return (
    <View style={styles.container}>
      <IconButton icon='cancel' size={200} iconColor='red' />
      <Title>Payment Error</Title>
      <Paragraph style={styles.box}>There was an error processing your payment.</Paragraph>
      <Button style={styles.box} mode="contained" onPress={handleRetry}>
        Retry Payment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop: 150,
      alignItems: 'center',
  },
  box: {
      padding: 10,
  },
});

export default PaymentError;