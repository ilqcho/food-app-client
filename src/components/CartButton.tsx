import { TouchableHighlight } from 'react-native';
import { IconButton  } from 'react-native-paper';
import { CartButtonProps } from '../types';

const CartButton: React.FC<CartButtonProps> = ({ icon, size, color, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="#E0E0E0"
  >
    <IconButton icon={icon} size={size} iconColor={color} />
  </TouchableHighlight>
);

export default CartButton;