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
} from '@libs/fundamentions/colors';
import {
    fonts,
    FontType,
} from '@libs/fundamentions/fonts';
import { useContextTheme } from '@libs/context/context';

export default function Text ({
    type = FontType.Callout,
    color = 'primary',
    colorState = 'main',
    style,
    bold,
    italic,
    children,
    ...restProps
}: TextProps) {

    const { state } = useContextTheme();

    const textStyles = useMemo((): StyleProp<TextStyle> => {
        const textColor = (() => {
            const _color = state?.color?.[color]?.[colorState];
            if (_color) {
                return _color;
            }
            const colorStyle = (style as any)?.color;
            if (colorStyle) {
                return colorStyle;
            } 
            return Color[ColorName.Slate][700];
        })();
        const textFont = (() => {
            const _fontStyle = bold ? fonts[type].bold : fonts[type].main;
            if (italic) {
                (_fontStyle as any).fontStyle = 'italic';
            }
            return _fontStyle;
        })();
        return Object.assign({}, textFont, { color: textColor }, style);
    }, [state, type, color, colorState, bold, italic, style]);

    return (
        <RNText
            style={textStyles}
            {...restProps}
        >
            {children}
        </RNText>
    )
}