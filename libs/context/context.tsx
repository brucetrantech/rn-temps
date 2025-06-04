import {
    createContext,
    PropsWithChildren,
    useContext,
    useState,
} from 'react';
import {
    ColorTheme,
    VariantAppearance,
} from '@libs';

export type ColorThemeProvider = Partial<{
    [ap in VariantAppearance]: ColorTheme
}>

type ContextState = {
    appearance?: VariantAppearance;
    color?: ColorThemeProvider;
    fontFamily?: string;
};

type ContextInterface = {
    state?: ContextState;
    action: {
        changeAppearance: (mode: VariantAppearance) => void;
    }
}

const ContextCreation = createContext<ContextInterface>({
    state: {
        appearance: 'light',
        color: undefined,
        fontFamily: undefined,
    },
    action: {
        changeAppearance: (mode: VariantAppearance) => {},
    }
})

export function useAppearanceTheme () {
    const { state } = useContext(ContextCreation);
    return state?.appearance || 'light';
}

export function useColorTheme (): ColorTheme {
    const { state } = useContext(ContextCreation);
    return state?.color?.[state.appearance || 'light'] as ColorTheme;
}

type ThemeProviderProps = PropsWithChildren<{
    initialValue?: ContextState;
}>;

export function ContextThemeProvider ({
    initialValue = {},
    children,
}: ThemeProviderProps) {
    const [appearance, setAppearance] = useState<VariantAppearance>('light');
    
    return (
        <ContextCreation.Provider value={{
            state: {
                ...initialValue,
                appearance,
            },
            action: {
                changeAppearance: setAppearance,
            }
        }}>
            {children}
        </ContextCreation.Provider>
    )
}
