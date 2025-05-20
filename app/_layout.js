import Ionicons from '@expo/vector-icons/Ionicons';
import { Slot, useRouter } from 'expo-router'; // <--- Użyj Slot do dynamicznych ekranów
import { Alert, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';

export default function RootLayout() {
  const router = useRouter();

  const renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'index':
        icon = 'home';
        break;
      case '-':
        icon = 'chatbox-ellipses';
        break;
      case '+':
        icon = 'bookmark';
        break;
      case 'settings':
        icon = 'settings-sharp';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? '#D33D2E' : '#9E9E9E'}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity 
        onPress={() => router.push(routeName === 'index' ? '/' : `/${routeName}`)}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        {renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      height={60}
      circleWidth={50}
      bgColor="#D9D9D9"
      initialRouteName="index"
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={{ width: 60, height: 60, borderRadius: 30, bottom: 30, backgroundColor: '#9E9E9E', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => Alert.alert('Click Action')}>
            <Ionicons name={'add'} color="#EBEBEB" size={40} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBarExpo.Screen name="index" position="LEFT" component={() => <Slot />} />
      {/* <CurvedBottomBarExpo.Screen name="-" position="LEFT" component={() => <Slot />} />
      <CurvedBottomBarExpo.Screen name="+" position="RIGHT" component={() => <Slot />} /> */}
      <CurvedBottomBarExpo.Screen name="settings" position="RIGHT" component={() => <Slot />} />
    </CurvedBottomBarExpo.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EBEBEB',
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
});