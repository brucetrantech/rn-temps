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

export default function Icon ({
    name,
    size = 24,
    color = Color[ColorName.Slate][700],
}: IconProps) {
    return (
        <View>
            <Text>Icon Name</Text>
        </View>
    )
}