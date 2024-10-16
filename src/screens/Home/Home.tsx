import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../components/Header/Header'; 
import Contador from '../../components/Contador/Contador';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import Footer from '../../components/Footer/Footer';
import styles from './HomeStyle';

const Home = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <Header count={count} />
      <Contador count={count} setCount={setCount} />
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Footer />
    </SafeAreaView>
  );
};

export default Home;


