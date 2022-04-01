import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScren() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoheader}>
        <Text style={styles.memotitle}>買い物リスト</Text>
        {/* eslint-disable-next-line */}
        <Text style={styles.memodate}>2022年3月30日　10:00</Text>
      </View>
      <ScrollView style={styles.memobody}>
        <Text style={styles.memotext}>
          親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }} name="edit-2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  memoheader: {
    backgroundColor: '#467fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memotitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memodate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memobody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memotext: {
    fontSize: 16,
    lineHeight: 24,
  },
});
