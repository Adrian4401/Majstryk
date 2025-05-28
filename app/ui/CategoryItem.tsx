import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View } from "react-native";
import { useDarkMode } from "../context/DarkModeContext";

interface CategoryItemProps {
    text: string;
    icon: IconProp;
}

export default function CategoryItem({ text, icon }: CategoryItemProps) {
    const { theme } = useDarkMode();

    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View
                style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    backgroundColor: theme.secondary,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 5,
                }}
            >
                <FontAwesomeIcon icon={icon} size={28} color={theme.background} />
            </View>
            <Text style={{ fontSize: 12, color: theme.text }}>{text}</Text>
        </View>
    );
}