import { createContext, PropsWithChildren, useContext } from 'react';
import {
    ColorTheme,
    VariantAppearance,
    VariantColor,
    VariantColorState,
} from '../fundamentions/variants';



type ContextInterface = {
    state?: {
        appearance?: VariantAppearance;
        color?: ColorTheme;
        fontFamily?: string;
    };
}

const ContextCreation = createContext<ContextInterface>({
    state: {
        appearance: 'light',
        color: undefined,
        fontFamily: undefined,
    },
})

export function useContextTheme () {
    return useContext(ContextCreation);
}

type ThemeProviderProps = PropsWithChildren<{
    initialValue?: ContextInterface;
}>;

export function ContextThemeProvider ({
    initialValue = {},
    children,
}: ThemeProviderProps) {
    return (
        <ContextCreation.Provider value={initialValue}>
            {children}
        </ContextCreation.Provider>
    )
}
