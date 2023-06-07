import { View, StyleSheet } from 'react-native';
import { Title, Paragraph, IconButton } from 'react-native-paper';
import { NavigationScreenProps } from '../types';
import { useContext } from 'react';
import { StateContext } from '../contexts/StateProvider';
import AppButton from './AppButton';

const PaymentSuccess: React.FC<NavigationScreenProps> = ({ navigation }) => {
    
    const { dispatch } = useContext(StateContext);

    const handleContinue = () => {
        dispatch({ type: 'RESET_BASKET' });
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <IconButton icon='check-circle' size={200} iconColor='green' />
            <Title style={styles.title} >Payment Successful!</Title>
            <Paragraph style={styles.paragraph}>Thank you for your purchase.</Paragraph>
            <AppButton onPress={handleContinue} title='Continue Shopping' />
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

export default PaymentSuccess;