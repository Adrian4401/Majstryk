import { faBookmark, faHome, faMessage, faPlus, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useRouter } from 'expo-router';
import { Alert, Animated, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import { useDarkMode } from '../context/DarkModeContext.js';
import HomeScreen from './index.tsx';
import SettingsScreen from './settings.tsx';


export default function MainLayout() {
  const router = useRouter();
  const { theme } = useDarkMode();

  const renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'index':
        icon = faHome;
        break;
      case 'messages':
        icon = faMessage;
        break;
      case 'marked':
        icon = faBookmark;
        break;
      case 'settings':
        icon = faUserGear;
        break;
    }

    return (
      <FontAwesomeIcon
        icon={icon}
        size={25}
        color={routeName === selectedTab ? theme.primary : theme.iconsLight}
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
      height={Platform.OS === 'ios' ? 60 : 50}
      circleWidth={50}
      bgColor={theme.bottomNavBackground}
      initialRouteName="index"
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={{ ...styles.circleButton, backgroundColor: theme.iconsLight}}>
          <TouchableOpacity onPress={() => Alert.alert('Click Action')}>
            <FontAwesomeIcon icon={faPlus} color={theme.textLight} size={40} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBarExpo.Screen name="index" position="LEFT" component={HomeScreen} />
      <CurvedBottomBarExpo.Screen name="messages" position="LEFT" component={HomeScreen} />
      <CurvedBottomBarExpo.Screen name="marked" position="RIGHT" component={SettingsScreen} />
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
    justifyContent: 'center',
    alignItems: 'center'
  },
});