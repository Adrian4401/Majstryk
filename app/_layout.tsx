import { Stack } from "expo-router";
import { DarkModeProvider } from "./context/DarkModeContext";

export default function RootLayout() {
    return (
        <DarkModeProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </DarkModeProvider>
    );
}