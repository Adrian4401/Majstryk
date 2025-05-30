import { faBlender, faBorderAll, faDoorClosed, faFaucetDrip, faGripLines, faPaintBrush, faPlugCircleBolt, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { Dimensions, TouchableOpacity, View } from "react-native";
import CategoryItem from "../ui/CategoryItem";
import HeadingText from "../ui/typography/HeadingText";

const ITEM_PER_ROW = 4;
const GAP = 12;
const ROW_GAP = 4; // Wysokość elementu, może być dostosowana
const ITEM_WIDTH =
    (Dimensions.get("window").width - 40 - GAP * (ITEM_PER_ROW - 1)) / ITEM_PER_ROW;

const categories = [
    { text: "Malowanie", icon: faPaintBrush },
    { text: "Elektryka", icon: faPlugCircleBolt },
    { text: "Hydraulika", icon: faFaucetDrip },
    { text: "Montaż mebli", icon: faScrewdriverWrench },
    { text: "Drzwi i okna", icon: faDoorClosed },
    { text: "Podłogi", icon: faGripLines },
    { text: "Ściany i sufity", icon: faBorderAll },
    { text: "AGD", icon: faBlender },
];

export default function CategoriesList() {
    return (
        <View style={{ padding: 20 }}>
            <HeadingText text="Kategorie" />
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: GAP,
                }}
            >
                {categories.map((category, idx) => (
                    <TouchableOpacity 
                        key={idx} 
                        style={{ 
                            width: ITEM_WIDTH,
                            marginBottom:
                            Math.floor(idx / ITEM_PER_ROW) < Math.floor((categories.length - 1) / ITEM_PER_ROW)
                                ? ROW_GAP
                                : 0,
                        }}
                    >
                        <CategoryItem text={category.text} icon={category.icon} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}