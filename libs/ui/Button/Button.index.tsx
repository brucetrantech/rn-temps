import {
    useCallback,
    useMemo,
} from 'react';
import {
    TouchableOpacity as RNTouchableOpacity,
    StyleProp,
    ViewStyle,
} from 'react-native';
import {
    FontTypeValues,
    Icon,
    Text,
    useColorTheme,
} from '@libs';
import {
    ButtonProps,
} from './Button.types';
import styles from './Button.style';
import {
    ButtonModeStyles,
    ButtonSizeStyles,
    getColorsDisabledButton,
    getColorsEnabledButton,
} from './Button.helpers';

export default function ButtonContained ({
    mode = 'filled',
    size = 'normal',
    colorType = 'primary',
    title,
    icon,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    buttonStyle,
    titleStyle,
    buttonColor,
    titleColor,
    children,
    style : _style, // unused style of TouchableOpacity, replace to use buttonStyle
    ...restProps
}: ButtonProps) {

    const colorTheme = useColorTheme();

    const colorCollection = useMemo(
        () =>  disabled
            ? getColorsDisabledButton(colorTheme, mode)
            : getColorsEnabledButton(colorTheme, mode, colorType),
        [disabled, colorTheme, mode, colorType],
    );

    const renderTitle = useCallback(() => {
        if (children) {
            return children;
        }
        const titleState = (() => {
            if (!title) {
                return 'none';
            }
            if (typeof title === 'string') {
                return 'string';
            }
            return 'node';
        })();
        switch(titleState) {
            case 'node': return title;
            case 'string': {
                const textType: FontTypeValues = (() => {
                    switch (size) {
                        case 'large': return 'title3';
                        case 'medium': return 'headline';
                        case 'normal': return 'callout';
                        case 'small': return 'subheadline';
                        default: return 'callout';
                    }
                })();
                return (
                <Text
                        type={textType}
                        color={colorCollection.titleColor}
                        style={titleStyle}
                    >{title}</Text>
                );
            }
            case 'none': return;
        }
    }, [children, title, titleColor, titleStyle, size, colorCollection]);

    const renderIcon = useCallback(() => {
        if (!icon) {
            return undefined;
        }
        if (typeof icon === 'string') {
            return <Icon name={icon} />
        }
    }, [icon, colorCollection.iconColor]);

    const customizedStyles = useMemo((): StyleProp<ViewStyle> => {
        const _modeStyles = ButtonModeStyles[mode];
        const _sizeStyles = ButtonSizeStyles[size];
        const backgroundColor = colorCollection.buttonBackgroundColor;
        const borderColor = colorCollection.buttonBorderColor;
        return [
            styles.view,
            _modeStyles,
            _sizeStyles,
            {
                backgroundColor,
                borderColor,
            },
            buttonStyle,
        ]
    }, [mode, size, colorCollection, buttonStyle]);

    return (
        <RNTouchableOpacity
            style={customizedStyles}
            {...restProps}
        >
            {iconPosition === 'left' ? (
                <>
                    {renderIcon()}
                    {renderTitle()}
                </>
            ) : (
                <>
                    {renderTitle()}
                    {renderIcon()}
                </>
            )}

        </RNTouchableOpacity>
    )
}