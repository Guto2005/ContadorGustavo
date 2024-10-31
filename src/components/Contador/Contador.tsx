import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  darkMode: boolean;
}

const Counter: React.FC<CounterProps> = ({ count, setCount, darkMode }) => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <View style={styles.counterContainer}>
      <Text style={[styles.countText, darkMode && styles.whiteText]}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable 
          style={[styles.button, count === 0 && styles.disabledButton]} 
          onPress={decrement} 
          disabled={count === 0}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>
      {count === 0 && <Text style={styles.warningText}>O número não pode ser menor que 0</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 48,
    marginVertical: 20,
  },
  whiteText: {
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#2e7d32',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  warningText: {
    color: 'red',
    marginTop: 10,
  },
});

export default Counter;
