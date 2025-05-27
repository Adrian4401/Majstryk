import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";

export default function HeaderWithUser() {
    let searchQuery = "";

    return (
        <View style={styles.header}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="person" size={20} color={colors.textLight} />
                <Text style={styles.title}>Witaj, Marian!</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
                <View style={styles.searchView}>
                    <TextInput
                        placeholder="Search..."
                        onChangeText={() => searchQuery}
                        style={{ flex: 1, marginRight: 10, fontSize: 16 }}
                    />
                    <TouchableOpacity>
                        <Ionicons name="search" size={20} color={colors.textMuted} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.searchOptions}>
                    <Ionicons name="options" size={20} color={colors.textSecondary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        padding: 20,
        paddingTop: 10,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        gap: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.textLight,
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
        backgroundColor: colors.background,
        borderRadius: 10,
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    searchOptions: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        padding: 10
    }
});