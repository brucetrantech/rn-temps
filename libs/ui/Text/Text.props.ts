import { 
    TextProps as RNTextProps,
    StyleProp,
    TextStyle,
} from "react-native";
import {
    FontTypeValues,
} from "../../fundamentions/fonts";
import {
    ColorThemeKeys,
    VariantColorState,
} from "../../fundamentions/variants";

export interface TextProps extends RNTextProps {
    color?: ColorThemeKeys;
    colorState?: VariantColorState;
    type?: FontTypeValues;
    style?: StyleProp<TextStyle>;
    bold?: boolean;
    italic?: boolean;
};
