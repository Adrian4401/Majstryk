import { SafeAreaView, StatusBar, Text, View } from "react-native";
import HeaderWithUser from "../components/HeaderWithUser";
import colors from "../constants/colors";

export default function HomeScreen() {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: colors.primary }}>
                <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
            </SafeAreaView>
            <View style={{ flex: 1, backgroundColor: colors.background }}>
                <HeaderWithUser />
                <Text>Home</Text>
            </View>
        </>
    );
}
