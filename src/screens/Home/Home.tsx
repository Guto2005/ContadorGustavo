import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Counter from './../../components/Contador/Contador';

const App = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <View style={[styles.container, darkMode ? styles.darkBackground : styles.lightBackground]}>
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Contador */}
      <Counter count={count} setCount={setCount} darkMode={darkMode} />

      {/* Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBackground: {
    backgroundColor: '#333',
  },
  lightBackground: {
    backgroundColor: '#f5e0a3',
  },
});

export default App;
