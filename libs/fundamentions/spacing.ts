import {
    StyleProp,
    ViewStyle,
} from "react-native";

export const spacing = {
    s4: 4,
    s6: 6,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s18: 18,
    s20: 20,
    s24: 24,
    s28: 28,
    s32: 32,
    s36: 36,
    s40: 40,
    s42: 42,
    s44: 44,
    s48: 48,
    s56: 56,
    s64: 64,
    s72: 72,
    s84: 84,
    s128: 128,
    s256: 256,
    s512: 512,
    s1024: 1024,
};

enum Direction {
    full,
    left,
    top,
    right,
    bottom,
}

export const borderRadius: {
    [key in Direction]: {
        [num in number]: StyleProp<ViewStyle>;
    };
} = {
    [Direction.full]: {
        4: {
            borderRadius: spacing.s4,
        },
        8: {
            borderRadius: spacing.s8,
        },
        12: {
            borderRadius: spacing.s12,
        },
        14: {
            borderRadius: spacing.s14
        },
        16: {
            borderRadius: spacing.s16,
        },
        20: {
            borderRadius: spacing.s20,
        },
        24: {
            borderRadius: spacing.s24,
        },
        32: {
            borderRadius: spacing.s32,
        },
        40: {
            borderRadius: spacing.s40,
        },
        42: {
            borderRadius: spacing.s42,
        },
        44: {
            borderRadius: spacing.s44,
        },
    },
    [Direction.left]: {
        4: {
            borderTopLeftRadius: spacing.s4,
            borderBottomLeftRadius: spacing.s4,
        },
        8: {
            borderTopLeftRadius: spacing.s8,
            borderBottomLeftRadius: spacing.s8,
        },
        12: {
            borderTopLeftRadius: spacing.s12,
            borderBottomLeftRadius: spacing.s12,
        },
        14: {
            borderTopLeftRadius: spacing.s14,
            borderBottomLeftRadius: spacing.s14
        },
        16: {
            borderTopLeftRadius: spacing.s16,
            borderBottomLeftRadius: spacing.s16,
        },
        20: {
            borderTopLeftRadius: spacing.s20,
            borderBottomLeftRadius: spacing.s20,
        },
        24: {
            borderTopLeftRadius: spacing.s24,
            borderBottomLeftRadius: spacing.s24,
        },
        32: {
            borderTopLeftRadius: spacing.s32,
            borderBottomLeftRadius: spacing.s32,
        },
        40: {
            borderTopLeftRadius: spacing.s40,
            borderBottomLeftRadius: spacing.s40,
        },
        42: {
            borderTopLeftRadius: spacing.s42,
            borderBottomLeftRadius: spacing.s42,
        },
        44: {
            borderTopLeftRadius: spacing.s44,
            borderBottomLeftRadius: spacing.s44,
        },
    },
    [Direction.top]: {
        4: {
            borderTopLeftRadius: spacing.s4,
            borderTopRightRadius: spacing.s4,
        },
        8: {
            borderTopLeftRadius: spacing.s8,
            borderTopRightRadius: spacing.s8,
        },
        12: {
            borderTopLeftRadius: spacing.s12,
            borderTopRightRadius: spacing.s12,
        },
        14: {
            borderTopLeftRadius: spacing.s14,
            borderTopRightRadius: spacing.s14
        },
        16: {
            borderTopLeftRadius: spacing.s16,
            borderTopRightRadius: spacing.s16,
        },
        20: {
            borderTopLeftRadius: spacing.s20,
            borderTopRightRadius: spacing.s20,
        },
        24: {
            borderTopLeftRadius: spacing.s24,
            borderTopRightRadius: spacing.s24,
        },
        32: {
            borderTopLeftRadius: spacing.s32,
            borderTopRightRadius: spacing.s32,
        },
        40: {
            borderTopLeftRadius: spacing.s40,
            borderTopRightRadius: spacing.s40,
        },
        42: {
            borderTopLeftRadius: spacing.s42,
            borderTopRightRadius: spacing.s42,
        },
        44: {
            borderTopLeftRadius: spacing.s44,
            borderTopRightRadius: spacing.s44,
        },
    },
    [Direction.right]: {
        4: {
            borderTopRightRadius: spacing.s4,
            borderBottomRightRadius: spacing.s4,
        },
        8: {
            borderTopRightRadius: spacing.s8,
            borderBottomRightRadius: spacing.s8,
        },
        12: {
            borderTopRightRadius: spacing.s12,
            borderBottomRightRadius: spacing.s12,
        },
        14: {
            borderTopRightRadius: spacing.s14,
            borderBottomRightRadius: spacing.s14
        },
        16: {
            borderTopRightRadius: spacing.s16,
            borderBottomRightRadius: spacing.s16,
        },
        20: {
            borderTopRightRadius: spacing.s20,
            borderBottomRightRadius: spacing.s20,
        },
        24: {
            borderTopRightRadius: spacing.s24,
            borderBottomRightRadius: spacing.s24,
        },
        32: {
            borderTopRightRadius: spacing.s32,
            borderBottomRightRadius: spacing.s32,
        },
        40: {
            borderTopRightRadius: spacing.s40,
            borderBottomRightRadius: spacing.s40,
        },
        42: {
            borderTopRightRadius: spacing.s42,
            borderBottomRightRadius: spacing.s42,
        },
        44: {
            borderTopRightRadius: spacing.s44,
            borderBottomRightRadius: spacing.s44,
        },
    },
    [Direction.bottom]: {
        4: {
            borderBottomLeftRadius: spacing.s4,
            borderBottomRightRadius: spacing.s4,
        },
        8: {
            borderBottomLeftRadius: spacing.s8,
            borderBottomRightRadius: spacing.s8,
        },
        12: {
            borderBottomLeftRadius: spacing.s12,
            borderBottomRightRadius: spacing.s12,
        },
        14: {
            borderBottomLeftRadius: spacing.s14,
            borderBottomRightRadius: spacing.s14
        },
        16: {
            borderBottomLeftRadius: spacing.s16,
            borderBottomRightRadius: spacing.s16,
        },
        20: {
            borderBottomLeftRadius: spacing.s20,
            borderBottomRightRadius: spacing.s20,
        },
        24: {
            borderBottomLeftRadius: spacing.s24,
            borderBottomRightRadius: spacing.s24,
        },
        32: {
            borderBottomLeftRadius: spacing.s32,
            borderBottomRightRadius: spacing.s32,
        },
        40: {
            borderBottomLeftRadius: spacing.s40,
            borderBottomRightRadius: spacing.s40,
        },
        42: {
            borderBottomLeftRadius: spacing.s42,
            borderBottomRightRadius: spacing.s42,
        },
        44: {
            borderBottomLeftRadius: spacing.s44,
            borderBottomRightRadius: spacing.s44,
        },
    }
}

export const shadowing = {}
