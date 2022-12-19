interface IThemeSwitch {
    isDarkTheme: boolean;
    onChange: () => void;
}
declare const ThemeSwitch: ({ isDarkTheme, onChange }: IThemeSwitch) => JSX.Element;
export { ThemeSwitch };
