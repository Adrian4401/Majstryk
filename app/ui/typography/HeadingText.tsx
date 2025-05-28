import { Text } from "react-native";
import { useDarkMode } from "../../context/DarkModeContext";

export default function HeadingText({ text } : { text: string }) {
    const { theme } = useDarkMode();

    return (
        <Text
            style={{
                fontSize: 20,
                fontWeight: "bold",
                color: theme.textPrimary,
                marginBottom: 15,
            }}
        >
            {text}
        </Text>
    );
}