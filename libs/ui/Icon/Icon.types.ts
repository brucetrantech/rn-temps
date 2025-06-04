import {
    StyleProp,
    ViewStyle,
} from "react-native";
import {
    IconName,
} from "./Icon.resources";

export interface IconProps {
    name?: IconName;
    color?: string;
    size?: number;
    style?: StyleProp<ViewStyle>;
    rawXml?: string;
}
