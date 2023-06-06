import { View, StyleSheet } from 'react-native';
import { Title, Paragraph, Button, IconButton } from 'react-native-paper';
import { NavigationScreenProps } from '../types';
import { useContext } from 'react';
import { StateContext } from '../contexts/StateProvider';

const PaymentSuccess: React.FC<NavigationScreenProps> = ({ navigation }) => {
    
    const { dispatch } = useContext(StateContext);

    const handleContinue = () => {
        dispatch({ type: 'RESET_BASKET' });
        navigation.navigate('Home');
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