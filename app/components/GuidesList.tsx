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
        time: "1:30",
        difficulty: "Średnie",
    },
    {
        text: "Jak wymienić gniazdko elektryczne?",
        categoryName: "Elektryka",
        categoryIcon: faPlugCircleBolt,
        isMarked: false,
        time: "0:45",
        difficulty: "Łatwe",
    },
    {
        text: "Jak pomalować ścianę?",
        categoryName: "Malowanie",
        categoryIcon: faPaintBrush,
        isMarked: false,
        time: "2:00",
        difficulty: "Średnie",
    },
    {
        text: "Jak zamontować drzwi?",
        categoryName: "Drzwi i okna",
        categoryIcon: faDoorClosed,
        isMarked: false,
        time: "2:30",
        difficulty: "Trudne",
    },
    {
        text: "Jak położyć panele podłogowe?",
        categoryName: "Podłogi",
        categoryIcon: faGripLines,
        isMarked: true,
        time: "3:00",
        difficulty: "Trudne",
    },
    {
        text: "Jak zamontować półkę na ścianie?",
        categoryName: "Ściany i sufity",
        categoryIcon: faBorderAll,
        isMarked: false,
        time: "0:40",
        difficulty: "Łatwe",
    },
    {
        text: "Jak naprawić cieknący kran?",
        categoryName: "Hydraulika",
        categoryIcon: faFaucetDrip,
        isMarked: false,
        time: "0:30",
        difficulty: "Łatwe",
    },
    {
        text: "Jak złożyć szafkę kuchenną?",
        categoryName: "Montaż mebli",
        categoryIcon: faScrewdriverWrench,
        isMarked: true,
        time: "1:15",
        difficulty: "Średnie",
    },
    {
        text: "Jak podłączyć blender?",
        categoryName: "AGD",
        categoryIcon: faBlender,
        isMarked: false,
        time: "0:10",
        difficulty: "Łatwe",
    },
    {
        text: "Jak wymienić żarówkę?",
        categoryName: "Elektryka",
        categoryIcon: faLightbulb,
        isMarked: false,
        time: "0:05",
        difficulty: "Łatwe",
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
                        time={guide.time}
                        difficulty={guide.difficulty}
                        isMarked={guide.isMarked}
                    />
                ))}
            </View>
        </View>
    );
}