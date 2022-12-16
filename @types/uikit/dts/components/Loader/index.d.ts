/// <reference types="react" />
interface ILoader {
    style?: object;
    isStop?: boolean;
}
declare const Loader: ({ style, isStop }: ILoader) => JSX.Element;
export { Loader };
export type { ILoader };
