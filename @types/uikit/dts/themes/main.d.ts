import { PaletteMode, ThemeOptions } from '@mui/material';
declare type TCard = {
    color?: string;
    border?: string;
    background?: string;
    hover: {
        color?: string;
        border?: string;
        background?: string;
    };
    disabled: {
        color?: string;
        border?: string;
        background?: string;
    };
};
declare type TInput = {
    primary?: string;
};
declare type TPaletteBase = {
    primary?: string;
    secondary?: string;
};
declare type TDocumentPlaceholder = TPaletteBase;
declare module '@mui/material/styles/createPalette' {
    interface Palette {
        border?: {
            neutral: string;
        };
        card?: TCard;
        input?: TInput;
        document?: TDocumentPlaceholder;
    }
    interface PaletteOptions {
        border?: {
            neutral: string;
        };
        card?: TCard;
        input?: TInput;
        document?: TDocumentPlaceholder;
        icon?: TPaletteBase;
        progress?: TPaletteBase;
    }
    interface SimplePaletteColorOptions {
        secondary?: string;
        alternative?: string;
    }
    interface TypeBackground {
        root: string;
        sumsub: string;
    }
    interface TypeText {
        dark?: string;
        light?: string;
        white?: string;
    }
}
export declare const getTheme: (mode?: PaletteMode) => ThemeOptions;
export {};
