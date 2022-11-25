/// <reference types="react" />
import { AutocompleteProps } from '@mui/material';
export interface CustomAutocompleteCountriesProps<T> extends Omit<AutocompleteProps<T, boolean, true, boolean, React.ElementType>, 'renderInput'> {
    errorMessage?: string;
    label?: string;
    placeholder?: string;
}
export declare const CustomAutocompleteCountries: React.FC<CustomAutocompleteCountriesProps<any[]>>;
