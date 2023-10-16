import React, {useEffect} from 'react';
import Account from '@/pages/Account';
import Category from '@/pages/Category';
import Home from '@/pages/Home';
import Order from '@/pages/Order';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {RootStackParamList} from '@/navigator/index';
import type {StackNavigationProp} from '@react-navigation/stack';
import {
  useNavigation,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import Icon from '@/assets/iconfont';

type BottomTabParamList = {
  Home: undefined;
  Order: undefined;
  Category: undefined;
  Account: undefined;
};

type BottomTabsRouteProp = RouteProp<RootStackParamList, 'BottomTabs'>;

const Tab = createBottomTabNavigator<BottomTabParamList>();

type Props = {
  route: BottomTabsRouteProp;
};

function BottomTabs(props: Props): JSX.Element {
  // 获取导航
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // 获取路由
  const {route} = props;

  // https://reactnavigation.org/docs/screen-options-resolution/#setting-parent-screen-options-based-on-child-navigators-state
  // 获取标题
  const getHeaderTitle = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        return '首页';
      case 'Order':
        return '订单';
      case 'Category':
        return '分类';
      case 'Account':
        return '我的';
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(
        getFocusedRouteNameFromRoute(route) ?? ('Home' as string),
      ),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0000ff',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: '首页',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-shouye" color={color} size={size} />
          ),
          title: '首页',
        }}
        component={Home}
      />
      <Tab.Screen
        name="Order"
        options={{
          headerTitle: '订单',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-shoucang" color={color} size={size} />
          ),
          title: '订单',
        }}
        component={Order}
      />
      <Tab.Screen
        name="Category"
        options={{
          headerTitle: '分类',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-faxian" color={color} size={size} />
          ),
          title: '分类',
        }}
        component={Category}
      />
      <Tab.Screen
        name="Account"
        options={{
          headerTitle: '我的',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-user" color={color} size={size} />
          ),
          title: '我的',
        }}
        component={Account}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
