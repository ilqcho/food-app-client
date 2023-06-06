import { TouchableHighlight } from 'react-native';
import { IconButton  } from 'react-native-paper';

const CartButton: React.FC<{ icon: string; size?: number; onPress: () => void }> = ({ icon, size, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="#E0E0E0"
  >
    <IconButton icon={icon} size={size} />
  </TouchableHighlight>
);

export default CartButton;