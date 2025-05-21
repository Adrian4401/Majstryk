import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Alert, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import colors from '../constants/colors.ts';
import HomeScreen from './index.tsx';
import SettingsScreen from './settings.tsx';

export default function MainLayout() {
  const router = useRouter();

  const renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'index':
        icon = 'home';
        break;
      // case '-':
      //   icon = 'chatbox-ellipses';
      //   break;
      // case '+':
      //   icon = 'bookmark';
      //   break;
      case 'settings':
        icon = 'settings-sharp';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? colors.primary : colors.iconsLight}
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
      screenOptions={{ headerShown: false }}
      type="DOWN"
      height={60}
      circleWidth={50}
      bgColor={colors.bottomNavBackground}
      initialRouteName="index"
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.circleButton}>
          <TouchableOpacity onPress={() => Alert.alert('Click Action')}>
            <Ionicons name={'add'} color={colors.textLight} size={40} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBarExpo.Screen name="index" position="LEFT" component={HomeScreen} />
      {/* <CurvedBottomBarExpo.Screen name="-" position="LEFT" component={() => <Slot />} />
      <CurvedBottomBarExpo.Screen name="+" position="RIGHT" component={() => <Slot />} /> */}
      <CurvedBottomBarExpo.Screen name="settings" position="RIGHT" component={SettingsScreen} />
    </CurvedBottomBarExpo.Navigator>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    bottom: 30,
    backgroundColor: colors.iconsLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
});