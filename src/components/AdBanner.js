import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function AdBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.adText}>광고 영역 (AdMob 준비중)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});