import { 
    TextProps as RNTextProps,
    StyleProp,
    TextStyle,
} from "react-native";
import {
    FontTypeValues,
    VariantColor,
} from "@libs";

export interface TextProps extends RNTextProps {
    color?: string;
    colorType?: VariantColor;
    type?: FontTypeValues;
    style?: StyleProp<TextStyle>;
    bold?: boolean;
    italic?: boolean;
};
