import React from 'react';
import { TFunction } from 'react-i18next';
declare type CustomSelectCountriesProps = {
    form: any;
    countries: Array<object>;
    t: TFunction<'', undefined>;
};
declare const CustomSelectCountries: React.FC<CustomSelectCountriesProps>;
export { CustomSelectCountries };
