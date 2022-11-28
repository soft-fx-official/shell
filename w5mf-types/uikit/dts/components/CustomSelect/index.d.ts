/// <reference types="react" />
interface CustomSelectProps {
    data: any;
    options: Array<any>;
    onChange: Function;
    variant: 'standard' | 'outlined' | 'filled';
    optionTemplate: (props: any) => any;
    label: string | null;
    onFocus?: () => any;
    onBlur?: () => any;
    placeholder: string;
    inputProps: (props: any) => object | void;
    name: string;
    modalProps: {
        style?: object;
        placeholder: string;
        title: string;
    };
}
declare const CustomSelect: ({ data, options, onChange, variant, optionTemplate, label, name, placeholder, onBlur, onFocus, inputProps, modalProps, }: CustomSelectProps) => JSX.Element;
export { CustomSelect };
