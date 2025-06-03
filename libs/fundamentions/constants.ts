import { VariantColorState } from "./variants";

export const SpecifiedColor: {
    [key in VariantColorState]: number;
} = {
    main: 700,
    ground: 100,
    shadow: 50,
    touched: 900,
};
