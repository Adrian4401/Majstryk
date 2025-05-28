import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDarkMode } from "../context/DarkModeContext";

export default function HeaderWithUser() {
    const { theme } = useDarkMode();
    let searchQuery = "";

    return (
        <View style={{ ...styles.header, backgroundColor: theme.primary }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="person" size={20} color={theme.textLight} />
                <Text style={{ ...styles.title, color: theme.textLight }}>Witaj, Marian!</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
                <View style={{ ...styles.searchView, backgroundColor: theme.background }}>
                    <TextInput
                        placeholder="Search..."
                        onChangeText={() => searchQuery}
                        style={{ flex: 1, marginRight: 10, fontSize: 16 }}
                    />
                    <TouchableOpacity>
                        <Ionicons name="search" size={20} color={theme.textMuted} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ ...styles.searchOptions, backgroundColor: theme.secondary }}>
                    <Ionicons name="options" size={20} color={theme.textSecondary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingTop: 10,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        gap: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginStart: 10
    },
    searchInput: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        paddingLeft: 10,
    },
    searchView: {
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    searchOptions: {
        borderRadius: 10,
        padding: 10
    }
});