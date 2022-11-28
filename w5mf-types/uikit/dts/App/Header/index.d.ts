/// <reference types="react" />
interface IHeader {
    isDarkTheme: boolean;
    setIsDarkTheme: (isDarkTheme: boolean) => void;
}
declare const Header: ({ isDarkTheme, setIsDarkTheme }: IHeader) => JSX.Element;
export { Header };
