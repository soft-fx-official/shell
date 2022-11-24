import React from 'react';
import { TinitApp } from 'common/inits';
import { IBus } from 'common/tools';
import { useContext } from './context';
interface ICreateMainArgs {
    App: React.FC;
    config: any;
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
    onError: (error: any) => void;
    onDone: () => void;
}
declare type MainProps = {
    bus: IBus | null;
    params: IMainParams | null;
};
declare function createMain(args: ICreateMainArgs): React.FC<MainProps>;
export { createMain, useContext };
export type { ICreateMainArgs, IMainParams, MainProps };
