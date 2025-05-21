import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";

export default function HeaderWithUser() {
    let searchQuery = "";

    return (
        <View style={styles.header}>
            <StatusBar style='dark' backgroundColor={colors.primary} translucent={false} />
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                <Ionicons name="person" size={20} color={colors.textLight} />
                <Text style={styles.title}>Witaj, Marian!</Text>
            </View>
            <TextInput placeholder="Search..." onChangeText={() => searchQuery} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        padding: 20,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
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
});