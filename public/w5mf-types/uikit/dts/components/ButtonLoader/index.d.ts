/// <reference types="react" />
interface IButtonLoader {
    isLoad: boolean;
    label: string;
    buttonProps?: any;
}
declare const ButtonLoader: ({ isLoad, label, buttonProps }: IButtonLoader) => JSX.Element;
export { ButtonLoader };
