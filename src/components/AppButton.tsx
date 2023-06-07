import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { AppButtonProps } from '../types';

const AppButton: React.FC<AppButtonProps> = ({ title, onPress }) => (
  <TouchableHighlight
    style={styles.checkoutButton}
    onPress={onPress}
  >
    <Text style={styles.checkoutButtonText}> {title} </Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
    checkoutButton: {
      backgroundColor: '#FF8000',
      borderRadius: 8,
      padding: 10,
      marginHorizontal: 20,
      marginBottom: 20,
      alignItems: 'center',
      height: 50
    },
    checkoutButtonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
});

export default AppButton;