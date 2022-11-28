import { IInitApiR, IInitStateR, IInitStorageR } from 'common/inits';
import { IBus } from 'common/tools';
import { i18n } from 'i18next';
import { Theme } from 'uikit/themes';
import { ICreateMainArgs } from './index';
interface IContext {
    storage: IInitStorageR;
    i18next: i18n;
    api: IInitApiR;
    state: IInitStateR;
    theme: Theme | null;
    bus: IBus;
}
declare type TuseContext = () => IContext;
declare const Context: any;
declare const useContext: TuseContext;
declare type TinitContextData = {
    isPrefersDarkMode?: boolean;
    bus: IBus | null;
} & Omit<ICreateMainArgs, 'App' | 'initCurrentApp'>;
declare function initContext(data: TinitContextData): {
    storage: any;
    i18next: any;
    api: any;
    state: any;
    theme: any;
    bus: any;
};
export { Context, initContext, useContext };
export type { IContext };
