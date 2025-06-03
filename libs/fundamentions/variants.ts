/**
 * Definitions 
**/
export type VariantMode =
    | 'filled'
    | 'outlined'
    | 'tinted'
    | 'plain';

export type VariantSize =
    | 's4' // extremely-small
    | 's3' // smallest
    | 's2' // smaller
    | 's1' // small
    | 's0' // semi-small
    | 'default' // normal
    | 'l0' // semi-large
    | 'l1' // large
    | 'l2' // larger
    | 'l3' // largest
    | 'l4'; // extremely-large

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

/**
 * Themes
 * **/
export type ColorTheme = Partial<{
    [key in VariantColor]: Partial<{
        [state in VariantColorState]: string;
    }>;
}>;

export type ColorThemeKeys = Partial<keyof ColorTheme>;