import React from 'react';
interface Error {
    message: string;
    ref: {
        name: string;
    };
    type: string;
    types: {
        type: string;
    };
}
interface MobileErrorTooltipProps {
    formErrors?: {
        [key: string]: Error;
    };
    fieldNames?: {
        [key: string]: string;
    };
    message?: string;
}
export declare const MobileErrorTooltip: React.FC<MobileErrorTooltipProps>;
export {};
