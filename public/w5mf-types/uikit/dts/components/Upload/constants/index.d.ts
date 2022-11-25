import React from 'react';
import { UploadDocumentType } from '../index';
declare type DocumentTemplate = {
    component: React.ReactNode;
    errorIcon: React.ReactNode;
};
export declare const DOCUMENT_TEMPLATES: Record<UploadDocumentType, DocumentTemplate>;
export {};
