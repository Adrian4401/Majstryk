import { Stack } from "expo-router";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { DarkModeProvider } from "./context/DarkModeContext";

export default function RootLayout() {
    return (
        <DarkModeProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{ flex: 1 }}>
                    <Stack screenOptions={{ headerShown: false }} />
                </View>
            </TouchableWithoutFeedback>
        </DarkModeProvider>
    );
}