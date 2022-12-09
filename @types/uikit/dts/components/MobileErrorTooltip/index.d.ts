import React from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
interface MobileErrorTooltipProps {
    formErrors?: FieldErrors<FieldValues>;
    fieldNames?: {
        [key: string]: string;
    };
    message?: string;
}
declare const MobileErrorTooltip: React.FC<MobileErrorTooltipProps>;
export { MobileErrorTooltip };
