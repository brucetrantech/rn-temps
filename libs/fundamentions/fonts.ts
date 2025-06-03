import {
    StyleProp,
    TextStyle,
} from "react-native";

export enum FontSize {
    s34 = 34, // large
    s28 = 28, // title1
    s24 = 24, // title2
    s22 = 22, // title3
    s20 = 20, // headline
    s18 = 18, // body
    s16 = 16, // callout
    s14 = 14, // subheadline
    s12 = 12, // footnote
    s10 = 10, // caption
};

export enum FonWeight {
    // Thin = '100',
    // ExtraLight = '200',
    // Light = '300',
    Normal = '400',
    Medium = '500',
    SemiBold = '600',
    Bold = '700',
    // ExtraBold = '800',
    // Black = '900',
};

export enum FontType {
    Large = 'large',
    Title1 = 'title1',
    Title2 = 'title2',
    Title3 = 'title3',
    Headline = 'headline',
    Body = 'body',
    Callout = 'callout',
    SubHeadline = 'subheadline',
    FootNote = 'footnote',
    Caption = 'caption',
}

export const FontFamily = {
    Poppins: {
        Bold: 'Poppins-Bold',
        SemiBold: 'Poppins-SemiBold',
        Medium: 'Poppins-Medium',
        Regular: 'Poppins-Regular',
    }
};

export type FontTypeValues = `${FontType}`;

export const fonts: {
    [key in FontType]: {
        [v in string]: StyleProp<TextStyle>;
    }; 
} = {
    [FontType.Large]: {
        main: {
            fontSize: FontSize.s34,
            fontWeight: FonWeight.Bold,
            lineHeight: 42,
            fontFamily: FontFamily.Poppins.Bold,
        },
        bold: {
            fontSize: FontSize.s34,
            fontWeight: FonWeight.Bold,
            lineHeight: 42,
            fontFamily: FontFamily.Poppins.Bold,
        },
    },
    [FontType.Title1]: {
        main: {
            fontSize: FontSize.s28,
            fontWeight: FonWeight.SemiBold,
            lineHeight: 34,
            fontFamily: FontFamily.Poppins.SemiBold,
        },
        bold: {
            fontSize: FontSize.s28,
            fontWeight: FonWeight.Bold,
            lineHeight: 34,
            fontFamily: FontFamily.Poppins.Bold,
        },
    },
    [FontType.Title2]: {
        main: {
            fontSize: FontSize.s24,
            fontWeight: FonWeight.SemiBold,
            lineHeight: 28,
            fontFamily: FontFamily.Poppins.SemiBold,
        },
        bold: {
            fontSize: FontSize.s24,
            fontWeight: FonWeight.Bold,
            fontFamily: FontFamily.Poppins.Bold,
        },
    },
    [FontType.Title3]: {
        main: {
            fontSize: FontSize.s22,
            fontWeight: FonWeight.SemiBold,
            lineHeight: 24,
            fontFamily: FontFamily.Poppins.SemiBold,
        },
        bold: {
            fontSize: FontSize.s22,
            fontWeight: FonWeight.Bold,
            lineHeight: 24,
            fontFamily: FontFamily.Poppins.Bold,
        },
    },
    [FontType.Headline]: {
        main: {
            fontSize: FontSize.s20,
            fontWeight: FonWeight.Medium,
            lineHeight: 22,
            fontFamily: FontFamily.Poppins.Medium,
        },
        bold: {
            fontSize: FontSize.s20,
            fontWeight: FonWeight.SemiBold,
            lineHeight: 22,
            fontFamily: FontFamily.Poppins.SemiBold,
        },
    },
    [FontType.Body]: {
        main: {
            fontSize: FontSize.s18,
            fontWeight: FonWeight.Normal,
            lineHeight: 22,
            fontFamily: FontFamily.Poppins.Regular,
        },
        bold: {
            fontSize: FontSize.s18,
            fontWeight: FonWeight.SemiBold,
            lineHeight: 22,
            fontFamily: FontFamily.Poppins.SemiBold,
        },
    },
    [FontType.Callout]: {
        main: {
            fontSize: FontSize.s16,
            fontWeight: FonWeight.Normal,
            lineHeight: 20,
            fontFamily: FontFamily.Poppins.Regular,
        },
        bold: {
            fontSize: FontSize.s16,
            fontWeight: FonWeight.SemiBold,
            lineHeight: 20,
            fontFamily: FontFamily.Poppins.SemiBold,
        },
    },
    [FontType.SubHeadline]: {
        main: {
            fontSize: FontSize.s14,
            fontWeight: FonWeight.Normal,
            lineHeight: 20,
            fontFamily: FontFamily.Poppins.Regular,
        },
        bold: {
            fontSize: FontSize.s14,
            fontWeight: FonWeight.Medium,
            lineHeight: 20,
            fontFamily: FontFamily.Poppins.SemiBold,
        },
    },
    [FontType.FootNote]: {
        main: {
            fontSize: FontSize.s12,
            fontWeight: FonWeight.Normal,
            lineHeight: 18,
            fontFamily: FontFamily.Poppins.Regular,
        },
        bold: {
            fontSize: FontSize.s12,
            fontWeight: FonWeight.Medium,
            lineHeight: 18,
            fontFamily: FontFamily.Poppins.SemiBold,
        },
    },
    [FontType.Caption]: {
        main: {
            fontSize: FontSize.s10,
            fontWeight: FonWeight.Normal,
            lineHeight: 16,
            fontFamily: FontFamily.Poppins.Regular,
        },
        bold: {
            fontSize: FontSize.s10,
            fontWeight: FonWeight.Medium,
            lineHeight: 16,
            fontFamily: FontFamily.Poppins.SemiBold,
        },
    },
}