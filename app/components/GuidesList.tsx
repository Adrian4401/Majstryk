import { faBlender, faBorderAll, faDoorClosed, faFaucetDrip, faGripLines, faLightbulb, faPaintBrush, faPlugCircleBolt, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { View } from "react-native";
import GuideItem from "../ui/GuideItem";
import HeadingText from "../ui/typography/HeadingText";

const guides = [
    {
        text: "Jak zamontować zlew?",
        categoryName: "Hydraulika",
        categoryIcon: faFaucetDrip,
        isMarked: true,
    },
    {
        text: "Jak wymienić gniazdko elektryczne?",
        categoryName: "Elektryka",
        categoryIcon: faPlugCircleBolt,
        isMarked: false,
    },
    {
        text: "Jak pomalować ścianę?",
        categoryName: "Malowanie",
        categoryIcon: faPaintBrush,
        isMarked: false,
    },
    {
        text: "Jak zamontować drzwi?",
        categoryName: "Drzwi i okna",
        categoryIcon: faDoorClosed,
        isMarked: false,
    },
    {
        text: "Jak położyć panele podłogowe?",
        categoryName: "Podłogi",
        categoryIcon: faGripLines,
        isMarked: true,
    },
    {
        text: "Jak zamontować półkę na ścianie?",
        categoryName: "Ściany i sufity",
        categoryIcon: faBorderAll,
        isMarked: false,
    },
    {
        text: "Jak naprawić cieknący kran?",
        categoryName: "Hydraulika",
        categoryIcon: faFaucetDrip,
        isMarked: false,
    },
    {
        text: "Jak złożyć szafkę kuchenną?",
        categoryName: "Montaż mebli",
        categoryIcon: faScrewdriverWrench,
        isMarked: true,
    },
    {
        text: "Jak podłączyć blender?",
        categoryName: "AGD",
        categoryIcon: faBlender,
        isMarked: false,
    },
    {
        text: "Jak wymienić żarówkę?",
        categoryName: "Elektryka",
        categoryIcon: faLightbulb,
        isMarked: false,
    },
];

export default function GuidesList({ headlineText }: { headlineText?: string }) {
    return (
        <View style={{ padding: 20 }}>
            {headlineText && <HeadingText text={headlineText} />}
            <View
                style={{
                    flexDirection: "column",
                    gap: 10,
                }}
            >
                {guides.map((guide, idx) => (
                    <GuideItem
                        key={idx}
                        text={guide.text}
                        categoryName={guide.categoryName}
                        categoryIcon={guide.categoryIcon}
                        isMarked={guide.isMarked}
                    />
                ))}
            </View>
        </View>
    );
}