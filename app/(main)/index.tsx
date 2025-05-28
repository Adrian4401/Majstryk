import { SafeAreaView, StatusBar, Text, View } from "react-native";
import HeaderWithUser from "../components/HeaderWithUser";
import { useDarkMode } from "../context/DarkModeContext";

export default function HomeScreen() {
    const { theme } = useDarkMode();

    return (
        <>
            <SafeAreaView style={{ backgroundColor: theme.primary }}>
                <StatusBar barStyle={'light-content'} backgroundColor={theme.primary} />
            </SafeAreaView>
            <View style={{ flex: 1, backgroundColor: theme.background }}>
                <HeaderWithUser />
                <Text>Home</Text>
            </View>
        </>
    );
}
