import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>By XPTO - Apps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#a3d39c',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
});

export default Footer;
