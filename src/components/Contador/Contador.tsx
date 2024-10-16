import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './ContadorStyle';

interface ContadorProps {
  count: number;
  setCount: (count: number) => void;
}

const Contador: React.FC<ContadorProps> = ({ count, setCount }) => {
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <View style={styles.counterContainer}>
      <Button title="Decrementar" onPress={decrementCount} />
      <Text style={styles.countText}>{count}</Text>
      <Button title="Incrementar" onPress={incrementCount} />
    </View>
  );
};

export default Contador;

