import { View, StyleSheet } from 'react-native';
import { Title, Paragraph, Button, IconButton } from 'react-native-paper';

const PaymentSuccess: React.FC = () => {

    const handleContinue = () => {
        console.log('navigate home')
    }

    return (
        <View style={styles.container}>
            <IconButton icon='check-circle' size={200} iconColor='green' />
            <Title>Payment Successful!</Title>
            <Paragraph style={styles.box}>Thank you for your purchase.</Paragraph>
            <Button style={styles.box} mode="contained" onPress={handleContinue}>
                Continue Shopping
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

export default PaymentSuccess;