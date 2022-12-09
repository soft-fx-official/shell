/// <reference types="react" />
interface IError {
    error: Error | unknown;
}
declare const Error: ({ error }: IError) => JSX.Element;
export default Error;
