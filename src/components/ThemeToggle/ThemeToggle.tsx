import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ThemeToggleStyle';

interface ThemeToggleProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
      <Text style={styles.toggleText}>Alternar modo {isDarkMode ? 'claro' : 'escuro'}</Text>
    </TouchableOpacity>
  );
};

export default ThemeToggle;
