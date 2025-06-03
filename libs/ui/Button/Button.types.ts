import {
    PropsWithChildren,
} from 'react';
import {
    StyleProp,
    TextStyle,
    ViewStyle,
} from "react-native";
import {
    VariantMode,
} from "../../fundamentions/variants";

export type ButtonProps = PropsWithChildren<{
    mode: VariantMode;
    title?: string | React.ReactNode;
    icon?: React.ReactNode;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;

}>;

