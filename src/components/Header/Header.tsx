import React from 'react';
import { View, Text } from 'react-native';
import { headerStyle } from './HeaderStyle';

interface HeaderProps {
  count: number;
}

export default function Header({ count }: HeaderProps) {
  return (
    <View style={headerStyle.header}>
      <Text style={headerStyle.headerText}>Contador {count}</Text>
      <Text style={headerStyle.headerText}>By XPTO</Text>
    </View>
  );
}

