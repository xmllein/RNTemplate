import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/navigator/index';
import {useStore} from '@/store/index';
type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type Props = {
  route: DetailRouteProp;
};

export default (props: Props) => {
  const store = useStore();
  const {count} = store;
  const {route} = props;
  return (
    <View style={styles.root}>
      <Text>Detail</Text>
      <Text>获取参数id: {route.params.id}</Text>
      <Text>获取store中的count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
