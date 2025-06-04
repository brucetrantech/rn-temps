/**
 * Definitions 
**/
export type VariantMode =
    | 'filled'
    | 'outlined'
    | 'tinted'
    | 'plain';

export type VariantSize =
    | 'small'
    | 'normal'
    | 'medium'
    | 'large'

export type VariantAppearance = 'dark' | 'light' | 'system';

export type VariantColor =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'error'
    | 'warning'
    | 'disabled';

export type VariantColorState =
    | 'main'
    | 'ground'
    | 'touched'
    | 'shadow';

export type ColorThemeType = `${VariantColor}.${VariantColorState}`;

/**
 * Themes
 * **/
export type ColorTheme = Partial<{
    [key in VariantColor]: Partial<{
        [state in VariantColorState]: string;
    }>;
}>;

export type ColorThemeKeys = Partial<keyof ColorTheme>;