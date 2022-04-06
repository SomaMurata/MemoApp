import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function MemoDetailScren(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  console.log(id);
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        console.log(doc.id, doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.memoheader}>
        <Text style={styles.memotitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        {/* eslint-disable-next-line */}
        <Text style={styles.memodate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.memobody}>
        <Text style={styles.memotext}>
          {memo && memo.bodyText}
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 40, bottom: 'auto' }}
        name="edit-2"
        onPress={() => {
          navigation.navigate('MemoEdit');
        }}
      />
    </View>
  );
}

MemoDetailScren.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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
