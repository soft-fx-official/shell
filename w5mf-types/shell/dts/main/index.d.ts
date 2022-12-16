import React from 'react';
import { Iconfig, TinitApp } from 'common/inits';
import { IBus } from 'common/tools';
import { useContext } from './context';
interface ICreateMainArgs {
    App: React.FC;
    config: Iconfig;
    initCurrentApp: TinitApp;
    State: any;
    defaultStateParams: any;
    translationResources: {
        [locale: string]: Record<string, any>;
    };
}
interface IMainParams {
    isLoader: boolean;
    isAnimate: boolean;
    onLoad: () => void;
    onError: (message?: string) => void;
    onDone: () => void;
}
declare type MainProps = {
    bus: IBus | null;
    params: IMainParams | null;
};
declare function createMain(args: ICreateMainArgs): React.FC<MainProps>;
export { createMain, useContext };
export type { ICreateMainArgs, IMainParams, MainProps };
