import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Contador</Text>
      <Switch
        value={darkMode}
        onValueChange={toggleDarkMode}
        style={styles.switch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#a3d39c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  switch: {
    marginRight: 10,
  },
});

export default Header;
