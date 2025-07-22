import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AdBanner from '../components/AdBanner';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>테스트 앱에 오신 것을 환영합니다!</Text>
        <Text style={styles.description}>
          Google Play Console 업로드 테스트용 앱입니다.
        </Text>
        
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>주요 기능:</Text>
          <Text style={styles.feature}>• 간단한 기능 테스트</Text>\n          <Text style={styles.feature}>• 설정 화면</Text>\n          <Text style={styles.feature}>• 정보 표시</Text>
        </View>

      </ScrollView>
      
      <AdBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  featuresContainer: {
    marginTop: 20,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  feature: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 10,
  },
});