import { Text } from 'react-native';
import { formatCurrency } from './utils';

const formatAmount: React.FC<{ amount: number; style: object }> = ({ amount, style }) => {
  const formattedAmount = formatCurrency(amount);

  return <Text style={style}>{formattedAmount}</Text>;
};

export default formatAmount;