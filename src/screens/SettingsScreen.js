import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AdBanner from '../components/AdBanner';

export default function SettingsScreen() {
  const showInfo = () => {
    Alert.alert(
      '앱 정보',
      '테스트 앱\n버전: 1.0.0\n\nGoogle Play Console 업로드 테스트용 앱입니다.'
    );
  };

  const showPrivacy = () => {
    Alert.alert(
      '개인정보 처리방침',
      '이 앱은 사용자의 개인정보를 안전하게 보호합니다.'
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>설정</Text>
        
        <TouchableOpacity style={styles.menuItem} onPress={showInfo}>
          <Text style={styles.menuText}>앱 정보</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem} onPress={showPrivacy}>
          <Text style={styles.menuText}>개인정보 처리방침</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>알림 설정</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>앱 평가하기</Text>
        </TouchableOpacity>
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
    marginBottom: 30,
    textAlign: 'center',
  },
  menuItem: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});