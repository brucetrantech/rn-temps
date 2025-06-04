import {
    Color,
    ColorName,
    ColorTheme,
    VariantAppearance,
    VariantColor,
    VariantMode,
    VariantSize,
} from '@libs'
import {
    StyleProp,
    ViewStyle,
} from 'react-native'

const commonStyles: StyleProp<ViewStyle> = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}

export const ButtonModeStyles: {
    [k in VariantMode]: StyleProp<ViewStyle>;
} = {
    filled: {},
    outlined: {
        borderStyle: 'solid',
        borderWidth: 1,
    },
    tinted: {},
    plain: {},
}

export const ButtonSizeStyles: {
    [k in VariantSize]: StyleProp<ViewStyle>;
} = {
    small: [
        commonStyles,
        {
            height: 28,
            borderRadius: 40,
            paddingVertical: 4,
            paddingHorizontal: 10,
        },
    ],
    normal: [
        commonStyles,
        {
            height: 36,
            borderRadius: 32,
            paddingVertical: 8,
            paddingHorizontal: 14,
        },
    ],
    medium: [
        commonStyles,
        {
            height: 46,
            borderRadius: 28,
            paddingVertical: 12,
            paddingHorizontal: 18,
        },
    ],
    large: [
        commonStyles,
        {
            height: 56,
            borderRadius: 16,
            paddingVertical: 16,
            paddingHorizontal: 24,
        },
    ],
};

const getColorByMode = (
    mode: VariantMode,
    mainColor: string,
    groundColor: string,
    touchColor: string,
) => {
    switch (mode) {
        case 'filled': {
            return {
                buttonBackgroundColor: mainColor,
                buttonBorderColor: mainColor,
                titleColor: Color[ColorName.White],
                iconColor: Color[ColorName.White],
                touchColor: touchColor,
            };
        }
        case 'outlined': {
            return {
                buttonBackgroundColor: Color[ColorName.White],
                buttonBorderColor: mainColor,
                titleColor: mainColor,
                iconColor: mainColor,
                touchColor: touchColor,
            };
        }
        case 'plain': {
            return {
                buttonBackgroundColor: undefined,
                buttonBorderColor: undefined,
                titleColor: mainColor,
                iconColor: mainColor,
                touchColor: touchColor,
            };
        }
        case 'tinted': {
            return {
                buttonBackgroundColor: groundColor,
                buttonBorderColor: groundColor,
                titleColor: mainColor,
                iconColor: mainColor,
                touchColor: touchColor,
            };
        }
        default: {
            return {
                buttonBackgroundColor: mainColor,
                buttonBorderColor: mainColor,
                titleColor: Color[ColorName.White],
                iconColor: Color[ColorName.White],
                touchColor: touchColor,
            };
        }
    }
}

export const getColorsDisabledButton = (colorTheme: ColorTheme, mode: VariantMode) => {
    const disabledColor = colorTheme.disabled;
    const MAIN_COLOR = disabledColor?.main || '';
    const GROUND_COLOR = disabledColor?.ground || '';
    const TOUCH_COLOR = disabledColor?.touched || '';
    return getColorByMode(mode, MAIN_COLOR, GROUND_COLOR, TOUCH_COLOR);
}

export const getColorsEnabledButton = (
    colorTheme: ColorTheme,
    mode: VariantMode,
    color: VariantColor,
): {
    buttonBackgroundColor?: string;
    buttonBorderColor?: string;
    titleColor?: string;
    iconColor?: string;
    touchColor?: string;
} => {
    const colorCollection = colorTheme[color];
    const MAIN_COLOR = colorCollection?.main || '';
    const GROUND_COLOR = colorCollection?.ground || '';
    const TOUCH_COLOR = colorCollection?.touched || '';
    return getColorByMode(mode, MAIN_COLOR, GROUND_COLOR, TOUCH_COLOR);
}