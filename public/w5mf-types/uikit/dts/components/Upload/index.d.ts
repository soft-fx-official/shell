/// <reference types="react" />
export declare enum UploadDocumentType {
    idCard = "idCard",
    certificate = "certificate",
    passport = "passport"
}
interface UploadProps {
    title?: string;
    description?: string;
    minFileSize?: number;
    maxFileSize?: number;
    documentType?: UploadDocumentType;
    acceptFormats?: string;
    onSelect: (file: File | null) => void;
    customError?: string;
    onError?: (errCode: string) => string;
}
declare const memoUpload: import("react").MemoExoticComponent<React.FC<UploadProps>>;
export { memoUpload as Upload };
