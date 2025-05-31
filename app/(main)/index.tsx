import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import CategoriesList from "../components/CategoriesList";
import GuidesList from "../components/GuidesList";
import HeaderWithUser from "../components/HeaderWithUser";
import { useDarkMode } from "../context/DarkModeContext";

export default function HomeScreen() {
    const { theme } = useDarkMode();

    return (
        <>
            <SafeAreaView style={{ backgroundColor: theme.primary }}>
                <StatusBar barStyle={'light-content'} backgroundColor={theme.primary} />
            </SafeAreaView>
            <ScrollView 
                style={{ flex: 1, backgroundColor: theme.background }}
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                <HeaderWithUser />
                <CategoriesList />
                <GuidesList headlineText="Porady" />
            </ScrollView>
        </>
    );
}
