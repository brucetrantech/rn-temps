import {
    View,
} from 'react-native';
import {
    Color,
    ColorName,
    Text,
} from '@libs';
import {
    IconProps,
} from './Icon.types';
import {
    SvgXml,
} from 'react-native-svg';
import {
    SvgResources,
} from './Icon.resources';

export default function Icon ({
    name,
    size = 24,
    color = Color[ColorName.Slate][700],
    style,
    rawXml,
}: IconProps) {

    if (rawXml) {
        return (
            <View style={style}>
                <SvgXml xml={rawXml} width={size} height={size} />
            </View>
        );
    }

    if (!name) {
        return null;
    }

    return (
        <View style={style}>
            <SvgXml
                xml={SvgResources[name](color)}
                width={size}
                height={size}
            />
        </View>
    );
}