import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import { Text as DefaultText, TextInput as DefaultTextInput, Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { DarkModeProvider } from "./context/DarkModeContext";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
    });

    if (!fontsLoaded) {
        (DefaultText as any).defaultProps ||= {};
        (DefaultText as any).defaultProps.style ||= {};
        (DefaultText as any).defaultProps.style.fontFamily = 'Inter_400Regular';

        (DefaultTextInput as any).defaultProps ||= {};
        (DefaultTextInput as any).defaultProps.style ||= {};
        (DefaultTextInput as any).defaultProps.style.fontFamily = 'Inter_400Regular';
    }

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