import React from 'react';
import { Iconfig } from 'common/inits';
interface PageProps {
    App: React.FC;
    config: Iconfig;
}
declare const _default: (({ App, config }: PageProps) => JSX.Element) & {
    displayName: string;
};
export default _default;
