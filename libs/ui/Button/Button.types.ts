import {
    StyleProp,
    TextStyle,
    ViewStyle,
    type TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import {
    VariantColor,
    VariantMode,
    VariantSize,
} from '@libs';

type IconPositionType = 'left' | 'right';

export interface ButtonProps extends RNTouchableOpacityProps {
    mode?: VariantMode;
    size?: VariantSize;
    colorType?: VariantColor;
    title?: string | React.ReactNode;
    icon?: string | React.ReactNode;
    iconPosition?: IconPositionType;
    loading?: boolean;
    disabled?: boolean;
    buttonStyle?: StyleProp<ViewStyle>; 
    titleStyle?: StyleProp<TextStyle>;
    buttonColor?: string;
    titleColor?: string;
    children?: React.ReactNode;
};
