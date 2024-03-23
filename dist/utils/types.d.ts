export type RequestUrl = {
    baseUrl: string;
    path: string;
    params: {
        [key: string]: string;
    };
    queryParams: {
        [key: string]: string;
    };
};
export declare const SelectorTypeParams: string[];
