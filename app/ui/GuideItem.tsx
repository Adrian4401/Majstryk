import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBookmark, faClock, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDarkMode } from "../context/DarkModeContext";

interface CategoryItemProps {
    text: string;
    // icon: IconProp;
    categoryName: string;
    categoryIcon: IconProp;
    time: string;
    difficulty: string;
    isMarked: boolean;
}

export default function GuideItem({ text, isMarked, categoryName, categoryIcon, time, difficulty }: CategoryItemProps) {
    const { theme } = useDarkMode();

    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: theme.lightGrayBg }}>
            <View style={styles.image}>
                <Image
                    source={require('../../assets/temp/guideTempImg.jpg')}
                    style={{ width: '100%', height: '100%', borderRadius: 16 }}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.content}>
                <View style={styles.upperContent}>
                    <Text
                        style={{ fontSize: 16, fontWeight: 'bold', color: theme.textPrimary, flexShrink: 1, maxWidth: '85%' }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {text}
                    </Text>
                    <TouchableOpacity onPress={() => console.log('Bookmark pressed')}>
                        <FontAwesomeIcon icon={faBookmark} size={18} color={isMarked ? theme.secondary : theme.textSecondary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.midContent}>
                    <FontAwesomeIcon icon={categoryIcon} size={12} color={theme.accent} />
                    <Text style={{ fontSize: 12, color: theme.textSecondary }}>{categoryName}</Text>
                </View>
                <View style={styles.lowerContent}>
                    <View style={styles.midContent}>
                        <FontAwesomeIcon icon={faClock} size={12} color={theme.accent} />
                        <Text style={{ fontSize: 12, color: theme.textSecondary }}>{time}</Text>
                    </View>
                    <View style={{...styles.midContent, width: '30%' }}>
                        <FontAwesomeIcon icon={faCrown} size={12} color={theme.accent} />
                        <Text style={{ fontSize: 12, color: theme.textSecondary }}>{difficulty}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        width: "100%",
        height: 100,
        padding: 10,
        borderRadius: 16,
        // Cień na zewnątrz (iOS)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        // Cień na zewnątrz (Android)
        elevation: 8,
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: 16,
        backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    upperContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    midContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    lowerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        justifyContent: 'space-between',
    },
});