import { TouchableHighlight, StyleSheet } from 'react-native';
import { IconButton  } from 'react-native-paper';

const CartButton: React.FC<{ selected: boolean; icon: string; onPress: () => void }> = ({ selected, icon, onPress }) => (
  <TouchableHighlight
    style={[
      styles.cartButton,
      selected ? styles.cartButtonSelected : null,
    ]}
    onPress={onPress}
    underlayColor="#E0E0E0"
  >
    <IconButton icon={icon} size={20} />
  </TouchableHighlight>
);

const styles = StyleSheet.create({
    titleContainer: {
        height: 60
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    cartButton: {
        borderRadius: 20,
        overflow: 'hidden',
    },
    cartButtonSelected: {
        backgroundColor: '#E0E0E0',
    },
});

export default CartButton;