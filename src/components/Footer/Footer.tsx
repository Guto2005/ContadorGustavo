import React from 'react';
import { View, Text } from 'react-native';
import styles from './FooterStyle';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer: Direitos reservados.</Text>
    </View>
  );
};

export default Footer;
