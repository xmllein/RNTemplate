import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator';
import {useStore} from '@/store/index';

export default () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const store = useStore();
  const {count, increment, decrement, incrementAsync, decrementAsync} = store;

  return (
    <View style={styles.root}>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() => {
          navigation.navigate('Detail', {
            id: 100,
          });
        }}>
        <Text style={styles.detailBtnTxt}>跳转到详情页</Text>
      </TouchableOpacity>
      <Text>count: {count}</Text>

      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() => {
          increment();
        }}>
        <Text style={styles.detailBtnTxt}>count增加值</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() => {
          decrement();
        }}>
        <Text style={styles.detailBtnTxt}>count减少值</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() => {
          incrementAsync();
        }}>
        <Text style={styles.detailBtnTxt}>异步count增加值</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() => {
          decrementAsync();
        }}>
        <Text style={styles.detailBtnTxt}>异步count减少值</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  detailBtn: {
    marginTop: 20,
    backgroundColor: '#FFC300',
    padding: 10,
    borderRadius: 5,
  },
  detailBtnTxt: {
    color: '#fff',
  },
});
