import { SafeAreaView, Text } from "react-native";
import HeaderWithUser from "../components/HeaderWithUser";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderWithUser />
            <Text>Home</Text>
        </SafeAreaView>
    );
}