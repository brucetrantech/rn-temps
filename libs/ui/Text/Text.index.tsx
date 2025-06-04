import React, {
    useMemo,
} from 'react';
import {
    Text as RNText,
    StyleProp,
    TextStyle,
} from 'react-native';
import {
    TextProps,
} from './Text.props';
import {
    Color,
    ColorName,
    fonts,
    FontType,
    useColorTheme,
} from '@libs';

export default function Text ({
    type = FontType.Callout,
    color,
    colorType = 'primary',
    style,
    bold,
    italic,
    children,
    ...restProps
}: TextProps) {

    const colorTheme = useColorTheme();

    const textStyles = useMemo((): StyleProp<TextStyle> => {
        
        const textColor = (() => {
            const inlineColor = (style as any)?.color;
            if (inlineColor) {
                return inlineColor;
            }
            if (color) {
                return color;
            }
            colorTheme[colorType]?.main || Color[ColorName.Slate][700];
        })();

        const textFont = (() => {
            const _fontStyle = bold ? fonts[type].bold : fonts[type].main;
            if (italic) {
                (_fontStyle as any).fontStyle = 'italic';
            }
            return _fontStyle;
        })();
        return Object.assign({}, textFont, { color: textColor }, style);
    }, [colorTheme, type, colorType, color, bold, italic, style]);

    return (
        <RNText
            style={textStyles}
            {...restProps}
        >
            {children}
        </RNText>
    )
}